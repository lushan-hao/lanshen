/* eslint-disable no-unused-vars */
import React from 'react';
import { memo, useState, useEffect, useMemo, useCallback } from 'react';
import styles from './index.less';
import { Button, Radio, DatePicker } from 'antd';
import SingleDatePicker from './SingleDatePicker';
import moment from 'moment';
import type { Moment } from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const { RangePicker } = DatePicker;

export type DatePickerOnChangeType = (
  dateArr: [Moment, Moment],
  dateArrString: [string, string],
) => void;

type Props = {
  TimeChange?: DatePickerOnChangeType;
  format?: string;
  size?: 'large' | 'middle' | 'small';
  value: string;
  valueEnd: string;
  allowClear?: boolean;
  pageType?: string;
  noShowSelect?: boolean;
  dateType?: 1 | 2;
  TypeChange?: (dateType: 1 | 2) => void;
  showText?: boolean;
};

const DatePickerQuick: React.FC<Props> = (props) => {
  const {
    size,
    value,
    valueEnd,
    TimeChange,
    format = 'YYYY-MM-DD',
    allowClear = false,
    pageType = '',
    noShowSelect = true,
    dateType = 1,
    TypeChange,
    showText = true,
  } = props;

  const [mergedValue, setInnerValue] = useState(moment(value));
  const [mergedValueEnd, setInnerValueEnd] = useState(moment(valueEnd));
  const [target, setTarget] = useState(0);

  useEffect(() => {
    setInnerValue(moment(value));
  }, [value]);

  useEffect(() => {
    setInnerValueEnd(moment(valueEnd));
  }, [valueEnd]);

  const presetChange = useCallback(
    (date: Moment, dateEnd: Moment) => {
      setInnerValue(date);
      setInnerValueEnd(dateEnd);
      TimeChange?.(
        [date, dateEnd],
        [date?.format(format), dateEnd?.format(format)],
      );
    },
    [TimeChange, format],
  );

  const buttons = useMemo(() => {
    return (
      <>
        {!pageType && (
          <Button
            type="link"
            size={size}
            onClick={() => {
              presetChange(
                moment().add(-1, 'days').startOf('date'),
                moment().add(-1, 'days').startOf('date'),
              );
            }}
          >
            昨日
          </Button>
        )}
        {pageType && (
          <Button
            type="link"
            size={size}
            onClick={() => {
              presetChange(
                moment().add(1, 'days').startOf('date'),
                moment().add(1, 'days').startOf('date'),
              );
            }}
          >
            明日
          </Button>
        )}
        <Button
          type="link"
          size={size}
          onClick={() => {
            presetChange(
              moment().subtract(2, 'days').startOf('date'),
              moment(),
            );
          }}
        >
          近三天
        </Button>
        <Button
          type="link"
          size={size}
          onClick={() => {
            presetChange(
              moment().subtract(6, 'days').startOf('date'),
              moment(),
            );
          }}
        >
          近一周
        </Button>
        <Button
          type="link"
          size={size}
          onClick={() => {
            presetChange(
              moment().subtract(29, 'days').startOf('date'),
              moment(),
            );
          }}
        >
          近一月
        </Button>
      </>
    );
  }, [pageType, size, presetChange]);

  useEffect(() => {
    TimeChange?.(
      [mergedValue, mergedValueEnd],
      [mergedValue?.format(format), mergedValueEnd?.format(format)],
    );
  }, [target]);

  return (
    <div className={styles.DatePickerQuick}>
      日期范围：
      <Radio.Group
        value={dateType}
        style={{ display: 'inline-block', marginRight: 20 }}
        onChange={(e: any) => {
          if (e.target.value === 1) {
            // 多日切换为单日, 结束时间设置为开时间
            setInnerValueEnd(mergedValue);
            TimeChange?.(
              [mergedValue, mergedValue],
              [mergedValue?.format(format), mergedValue?.format(format)],
            );
          }
          TypeChange?.(e.target.value);
        }}
      >
        <Radio value={1}>单日</Radio>
        <Radio value={2}>多日</Radio>
      </Radio.Group>
      {dateType === 1 && (
        <SingleDatePicker
          locale={locale}
          value={moment(mergedValue)}
          format={format}
          allowClear={allowClear}
          onChange={(date: Moment) => {
            setInnerValue(date);
            setInnerValueEnd(date);
            setTarget(target + 1);
          }}
        />
      )}
      {dateType === 2 && (
        <>
          {showText && <span>选择日期：</span>}
          <RangePicker
            locale={locale}
            value={[moment(mergedValue), moment(mergedValueEnd)]}
            allowClear={allowClear}
            format={format}
            onOpenChange={(open: boolean) => {
              if (!open) {
                setTarget(target + 1);
              }
            }}
            onChange={(dateArr: any) => {
              setInnerValue(dateArr[0]);
              setInnerValueEnd(dateArr[1]);
            }}
          />
        </>
      )}
      {!noShowSelect && dateType === 2 && buttons}
    </div>
  );
};

export default memo(DatePickerQuick);

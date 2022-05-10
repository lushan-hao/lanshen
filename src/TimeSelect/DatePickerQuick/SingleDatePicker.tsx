/*
 * @LastEditors: haols
 */
import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import './index.less';

interface Props {
  allowClear?: boolean;
  value?: Moment;
  format?: string;
  onChange?: (date: Moment, dateSting: string) => void; // 用于form表单中传函数
  showText?: boolean;
  disabled?: boolean;
}

const SingleDatePicker: React.FC<Props> = (props) => {
  const {
    allowClear = false,
    value,
    format = 'YYYY-MM-DD',
    onChange,
    showText = true,
    disabled = false,
    ...rest
  } = props; // onSingleChange
  return (
    <div className="SingleDatePicker">
      {showText && <span>选择日期：</span>}
      <span
        className="icon iconfont leftButton"
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        onClick={() => {
          if (disabled) {
            return;
          }
          onChange?.(
            moment(value).add(-1, 'days'),
            moment(value).add(-1, 'days').format('YYYY-MM-DD'),
          );
        }}
      >
        &#xe667;
      </span>
      <DatePicker
        {...rest}
        allowClear={allowClear}
        disabled={disabled}
        value={moment(value)}
        format={format}
        onChange={(date: Moment | null, dateSting: string) => {
          if (date !== null) {
            onChange?.(date, dateSting);
          }
        }}
      />
      <span
        className="icon iconfont rightButton"
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        onClick={() => {
          if (disabled) {
            return;
          }
          onChange?.(
            moment(value).add(1, 'days'),
            moment(value).add(1, 'days').format('YYYY-MM-DD'),
          );
        }}
      >
        &#xe63c;
      </span>
    </div>
  );
};

export default SingleDatePicker;

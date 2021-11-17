/*
 * @LastEditors: haols
 */
import React, { useState, useEffect, useMemo, Fragment } from 'react';
import { Button, Input } from 'antd';
import Trigger from 'rc-trigger';
import moment from 'moment';

import 'antd/dist/antd.css';
import { ClockCircleOutlined } from '@ant-design/icons';
import './index.less';
import { MinuteList60, HourList24 } from './config';

const format = 'HH:mm';

const TimePicker = (props: TimePickProps) => {
  const {
    width = 120,
    value = null,
    onChange,
    disabled = false,
    minuteStep = 1,
    hourStep = 1,
    disabledHours,
    disabledMinutes,
    className,
    ...rest
  } = props;
  const [hourValue, setHourValue] = useState<string | null>(null);
  const [minuteValue, setMinuteValue] = useState<string | null>(null);
  const [isvisible, setIsvisible] = useState<boolean>(false);

  // 向外部传递值
  const ChangeData = () => {
    if (onChange !== undefined && hourValue !== null && minuteValue !== null) {
      onChange(
        moment(`${hourValue}:${minuteValue}`, 'HH:mm'),
        `${hourValue}:${minuteValue}`,
      );
    }
  };

  // 设置内部的值
  const AssignmentData = (accValue: string | null) => {
    if (accValue !== null) {
      setHourValue(moment(accValue, format)?.format('HH'));
      setMinuteValue(moment(accValue, format)?.format('mm'));
    }
  };

  useEffect(() => {
    // 传入数据进行处理
    AssignmentData(value);
  }, [value]);

  const MinuteList = useMemo(() => {
    // 分钟列表
    return MinuteList60({ step: minuteStep, hour: hourValue });
  }, [hourValue]);

  const hourList = useMemo(() => {
    // 小时列表
    return HourList24({ step: hourStep });
  }, [hourStep]);

  const disabledHoursList = useMemo(() => {
    if (!isvisible) {
      return [];
    }
    if (disabledHours && Array.isArray(disabledHours())) {
      return disabledHours().reduce((acc: string[], item: number) => {
        return acc.concat([`${item > 10 ? '' : 0}${item}`]);
      }, []);
    }
    return [];
  }, [isvisible]);

  const disabledMinutesList = useMemo(() => {
    if (!isvisible) {
      return [];
    }
    if (disabledMinutes && Array.isArray(disabledMinutes(Number(hourValue)))) {
      return disabledMinutes(Number(hourValue)).reduce(
        (acc: string[], item: number) => {
          return acc.concat([`${item > 10 ? '' : 0}${item}`]);
        },
        [],
      );
    }
    return [];
  }, [isvisible, hourValue]);

  // console.log(
  //   '外面传进来的值：',
  //   value,
  //   'disabledHoursList: ',
  //   disabledHoursList,
  //   'disabledMinutesList:',
  //   disabledMinutesList,
  // );

  const PopFunction = () => {
    // 弹出组件
    return (
      <div className="TimePicker-dropdown">
        {!disabled && (
          <Fragment>
            <ul>
              {hourList.map((item: string) => {
                let currentClassName = '';
                if (hourValue === item) {
                  currentClassName = 'selectTime';
                }
                if (
                  disabledHoursList.findIndex((p: string) => p === item) > -1
                ) {
                  currentClassName = 'disabledTime';
                }
                return (
                  <li
                    key={item}
                    className={currentClassName}
                    onClick={() => {
                      if (currentClassName === '') {
                        setHourValue(item);
                        // if (disabledMinutes) {
                        //   disabledMinutes(Number(item));
                        // }
                      }
                    }}
                  >
                    <div>{item}</div>
                  </li>
                );
              })}
            </ul>
            <ul>
              {MinuteList.map((item: string) => {
                let currentClassName = '';
                if (minuteValue === item) {
                  currentClassName = 'selectTime';
                }
                if (
                  disabledMinutesList.findIndex((p: string) => p === item) > -1
                ) {
                  currentClassName = 'disabledTime';
                }
                return (
                  <li
                    key={item}
                    className={currentClassName}
                    onClick={() => {
                      if (currentClassName === '') {
                        setMinuteValue(item);
                      }
                    }}
                  >
                    <div>{item}</div>
                  </li>
                );
              })}
            </ul>
            <div className="TimePicker-dropdown-footer">
              <Button
                type="link"
                onClick={() => {
                  console.log('此时');
                }}
              >
                此时
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  ChangeData();
                  setIsvisible(false);
                }}
              >
                确定
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    );
  };

  return (
    <div className={className} style={{ display: 'inline-block' }}>
      <Trigger
        action={['click']}
        popupPlacement="bottom"
        popup={<PopFunction />}
        popupAlign={{
          points: ['tl', 'bl'],
          offset: [0, 3],
        }}
        maskClosable
        popupVisible={isvisible}
        onPopupVisibleChange={(visible: boolean) => {
          !disabled && setIsvisible(visible);
          AssignmentData(value);
        }}
      >
        <div className="TimePicker">
          <Input
            {...rest}
            style={{
              width,
              caretColor: 'transparent',
            }}
            disabled={disabled}
            placeholder={
              hourValue === null || minuteValue === null ? '请选择时间' : ''
            }
            value={
              hourValue === null || minuteValue === null
                ? undefined
                : `${hourValue}:${minuteValue}`
            }
          />
          <ClockCircleOutlined className="TimePicker-icon" />
        </div>
      </Trigger>
    </div>
  );
};
export default TimePicker;

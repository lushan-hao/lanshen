/*
 * @LastEditors: haols
 */
import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import Trigger from 'rc-trigger';
import moment from 'moment';

// import 'antd/dist/antd.css';
import { ClockCircleOutlined } from '@ant-design/icons';
import './index.less';
import type { TimePickProps } from './type';
import PopFunction from './popup';

const format = 'HH:mm';

const TimePicker = (props: TimePickProps) => {
  const {
    width = 140,
    value = null,
    disabled = false,
    // minuteStep = 1,
    // hourStep = 1,
    className,
    defaultValue,
    // disabledHours,
    // disabledMinutes,
    onChange,
    mount,
    PopupRest,
    ...rest
  } = props;
  const [hourValue, setHourValue] = useState<string | null>(null);
  const [minuteValue, setMinuteValue] = useState<string | null>(null);
  const [isvisible, setIsvisible] = useState<boolean>(false);

  // 设置内部的值
  const AssignmentData = (accValue: string | null) => {
    if (accValue === '24:00') {
      setHourValue('24');
      setMinuteValue('00');
      return;
    }
    if (accValue !== null) {
      setHourValue(moment(accValue, format)?.format('HH'));
      setMinuteValue(moment(accValue, format)?.format('mm'));
      return;
    }
    setHourValue(null);
    setMinuteValue(null);
  };

  useEffect(() => {
    // 传入数据进行处理
    AssignmentData(defaultValue || value);
  }, [value, defaultValue]);

  // console.log(
  //   '外面传进来的值：',
  //   value,
  //   'disabledHoursList: ',
  //   disabledHoursList,
  //   'disabledMinutesList:',
  //   disabledMinutesList,
  // );

  return (
    <div
      className={`${className} TimePicker`}
      style={{ display: 'inline-block' }}
    >
      <Trigger
        action={['click']}
        popup={
          <PopFunction
            {...props}
            hourValue={hourValue}
            isvisible={isvisible}
            minuteValue={minuteValue}
            setHourValue={setHourValue}
            setIsvisible={setIsvisible}
            onChange={onChange}
            setMinuteValue={setMinuteValue}
            AssignmentData={AssignmentData}
            value={value}
          />
        }
        popupAlign={{
          points: ['tl', 'bl'],
          offset: [0, 3],
          overflow: {
            adjustX: 1,
            adjustY: 1,
          },
        }}
        // getPopupContainer={(e) => {
        //   return (mount ?? e) as any;
        // }}
        popupVisible={isvisible}
        popupMotion={{
          motionName: 'rc-trigger-popup-zoom',
        }}
        onPopupVisibleChange={(visible: boolean) => {
          if (disabled) {
            return;
          }
          if (!visible) {
            AssignmentData(value);
          }
          setIsvisible(visible);
        }}
        {...PopupRest}
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

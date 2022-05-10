import React, { useMemo, Fragment } from 'react';
import { Button } from 'antd';
import moment from 'moment';
import type { TimePickProps, PopFunctionProps } from './type';

// import 'antd/dist/antd.css';
import './index.less';
import { MinuteList60, HourList24, LocalTime } from './config';

const PopFunction = (props: TimePickProps & PopFunctionProps) => {
  const {
    disabled = false,
    minuteStep = 1,
    hourStep = 1,
    disabledHours,
    disabledMinutes,
    isvisible,
    hourValue,
    minuteValue,
    setHourValue,
    setIsvisible,
    onChange,
    setMinuteValue,
    AssignmentData,
    value,
  } = props;

  const MinuteList = useMemo(() => {
    // 分钟列表
    return MinuteList60({ step: minuteStep, hour: hourValue });
  }, [hourValue, minuteStep]);

  const hourList = useMemo(() => {
    // 小时列表
    return HourList24({ step: hourStep });
  }, [hourStep]);

  // 不可选择的小时列表
  const disabledHoursList = useMemo(() => {
    if (!isvisible) {
      return [];
    }
    let arr: string[] = [];
    if (minuteValue === '00') {
      arr = ['00'];
    }
    if (minuteValue && minuteValue !== '00') {
      arr = ['24'];
    }
    if (disabledHours && Array.isArray(disabledHours())) {
      return disabledHours().reduce((acc: string[], item: number) => {
        return acc.concat([`${item > 10 ? '' : 0}${item}`]);
      }, arr);
    }
    return arr;
  }, [isvisible, minuteValue]);

  // 不可选择的分钟列表
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

  // 向外部传递值
  const ChangeData = () => {
    AssignmentData(value as string | null);
    if (onChange !== undefined && hourValue !== null && minuteValue !== null) {
      onChange(`${hourValue}:${minuteValue}`);
    }
  };

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
              if (disabledHoursList.findIndex((p: string) => p === item) > -1) {
                currentClassName = 'disabledTime';
              }
              return (
                <li
                  key={item}
                  className={currentClassName}
                  onClick={() => {
                    if (currentClassName === '') {
                      setHourValue(item);
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
                const localTimeString =
                  moment().format('HH:mm') === '00:00'
                    ? '24:00'
                    : moment().format('HH:mm');
                const TimeList = localTimeString.split(':');
                // 分钟步长选择
                const newTimeList = LocalTime({
                  List: TimeList,
                  minuteStep,
                  MinuteList: MinuteList?.filter(
                    (p) => !disabledMinutesList.find((e) => e === p),
                  ),
                  hourStep,
                  hourList: hourList?.filter(
                    (p) => !disabledHoursList.find((e) => e === p),
                  ),
                });
                // console.log(TimeList, 'TimeList');
                AssignmentData(
                  `${newTimeList[0]}:${newTimeList[1]}` ?? localTimeString,
                );
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

export default PopFunction;

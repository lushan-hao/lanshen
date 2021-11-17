/*
 * @LastEditors: haols
 */
import { Moment } from 'moment';
interface TimePickProps {
  className?: string; // className
  width?: number; // 宽度
  value?: string | null; // 显示数值
  disabled?: boolean; // 不可点击
  minuteStep?: number; // 分钟时间间隔
  hourStep?: number; // 小时时间间隔
  disabledHours?: () => number[]; // 不可选择小时数
  disabledMinutes?: (selectedHour: number | null) => number[]; // 不可选择分钟数
  onChange?: (time: Moment, timeString: string) => void; // 更改函数
}

interface PropsminuteList60 {
  step?: number;
  hour?: string | null; // null时默认展示00-59
}

interface PropsHourList24 {
  step?: number;
}
declare module 'lanshen';

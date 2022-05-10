import type { PropsminuteList60, PropsHourList24 } from './type';
export declare const MinuteList60: (props: PropsminuteList60) => string[];
export declare const HourList24: (props: PropsHourList24) => string[];
export declare const LocalTime: ({
  List,
  minuteStep,
  MinuteList,
  hourStep,
  hourList,
}: {
  List: string[];
  minuteStep: number;
  MinuteList: string[];
  hourStep: number;
  hourList: string[];
}) => string[];

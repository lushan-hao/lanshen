import React from 'react';
import type { Moment } from 'moment';
import 'moment/locale/zh-cn';
export declare type DatePickerOnChangeType = (
  dateArr: [Moment, Moment],
  dateArrString: [string, string],
) => void;
declare type Props = {
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
declare const _default: React.NamedExoticComponent<Props>;
export default _default;

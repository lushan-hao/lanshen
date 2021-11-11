import React from 'react';
import 'antd/dist/antd.css';
import type { Moment } from 'moment';
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
};
declare const _default: React.NamedExoticComponent<Props>;
export default _default;

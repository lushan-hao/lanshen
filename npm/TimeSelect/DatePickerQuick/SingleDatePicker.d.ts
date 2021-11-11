import React from 'react';
import type { Moment } from 'moment';
import './index.less';
interface Props {
  allowClear?: boolean;
  value?: Moment;
  format?: string;
  onChange?: (date: Moment, dateSting: string) => void;
  showText?: boolean;
  disabled?: boolean;
}
declare const SingleDatePicker: React.FC<Props>;
export default SingleDatePicker;

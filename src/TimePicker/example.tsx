/*
 * @LastEditors: haols
 */
import React, { useState } from 'react';
import type { Moment } from 'moment';
import { TimePicker } from 'lanshen';

export default () => {
  const [value, setValue] = useState<string>('12:00');
  return (
    <TimePicker
      value={value}
      disabledHours={() => {
        return [0, 1, 2];
      }}
      disabledMinutes={(selectedHour: number | null) => {
        if (selectedHour === 5 || selectedHour === 7 || selectedHour === 9) {
          return [30, 15];
        }
      }}
      minuteStep={15}
      onChange={(_time: Moment, timeString: string) => {
        setValue(timeString);
      }}
    />
  );
};

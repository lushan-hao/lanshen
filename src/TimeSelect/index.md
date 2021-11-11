<!--
 * @LastEditors: haols
-->

## demo

```tsx
import React, { useState } from 'react';
import { DatePickerQuick } from 'lanshen';

export default () => {
  const [value, setValue] = useState<string>('2021-11-10');
  const [valueEnd, setValueEnd] = useState<string>('2021-11-10');
  const [dateType, setDateType] = useState<1 | 2>(1);
  return (
    <DatePickerQuick
      TimeChange={(_dateArr: any, dateArrString: [string, string]) => {
        setValue(dateArrString[0]);
        setValueEnd(dateArrString[1]);
      }}
      dateType={dateType}
      TypeChange={(dateType: 1 | 2) => {
        setDateType(dateType);
      }}
      pageType="1"
      allowClear
      value={value}
      valueEnd={valueEnd}
    />
  );
};
```

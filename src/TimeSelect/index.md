## DatePickerQuick 日期快速选择

### 基本

```tsx
/**
 * title: 基本
 * desc: 点击`TimePicker`然后可以在浮层中选择或者输入某一时间。
 */
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

### 展示 buttons

```tsx
/**
 * title: 展示buttons
 * desc: 快捷选择时间, 并且只有多选时才存在
 */
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
      noShowSelect={false}
      showText={false}
      pageType="1"
      allowClear
      value={value}
      valueEnd={valueEnd}
    />
  );
};
```

### 单独使用单选

```tsx
/**
 * title: 单独使用单选
 * desc: 点击`TimePicker`然后可以在浮层中选择或者输入某一时间。
 */
import React, { useState } from 'react';
import { SingleDatePicker } from 'lanshen';
import moment from 'moment';

export default () => {
  const [value, setValue] = useState<Moment>(moment('2021-11-10'));
  const format = 'YYYY-MM-DD';
  return (
    <SingleDatePicker
      value={value}
      format={format}
      allowClear={(date: Moment) => {
        setValue(date);
      }}
    />
  );
};
```

### API

`<DatePickerQuick />`
| 参数 | 说明 | 类型 | 默认值 |
| :---- | :----: | :----: | :----: |
| allowClear | 是否允许清空 | boolean | false |
| value | 当前开始时间 | string | - |
| valueEnd | 当前结束时间 | string | - |
| showText | 是否展示文本 | boolean | true |
| dateType | 单选还是多选 | 1、2 | 1 |
| noShowSelect | 是否展示后面的一天、多天 | boolean | false |
| TypeChange | 单选多选切换 | (dateType: 1、 2) => void; | - |
| size | 尺寸 | 'large'、'middle'、'small' | 'middle' |
| format | 格式化 | string | 'YYYY-MM-DD' |
| TimeChange | 时间发生变化的回调 | function(dateArr: [Moment, Moment], dateArrString: [string, string]) => void; | - |

`<SingleDatePicker />`
| 参数 | 说明 | 类型 | 默认值 |
| :---- | :----: | :----: | :----: |
| value | 当前开始时间 | Moment | - |
| allowClear | 是否允许清空 | boolean | false |
| format | 格式化 | string | 'YYYY-MM-DD' |
| onChange | 时间发生变化的回调 | function(dateArr: Moment) => void; | - |

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/lushan-hao/lanshen/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown
# lanshen

## Getting Started

Install dependencies,

```bash
$ npm i lanshen
```

import

## demo

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

### API

`<TimePicker />`n
| 参数 | 说明 | 类型 | 默认值 |
| :---- | :----: | :----: | :----: |
| allowClear | 是否允许清空 | boolean | false |
| value | 当前开始时间 | string | - |
| valueEnd | 当前结束时间 | string | - |
| dateType | 单选还是多选 | 1、2 | 1 |
| noShowSelect | 是否展示后面的一天、多天 | boolean | false |
| TypeChange | 单选多选切换 | (dateType: 1、 2) => void; | - |
| size | 尺寸 | 'large'、'middle'、'small' | 'middle' |
| format | 格式化 | string | 'YYYY-MM-DD' |
| TimeChange | 时间发生变化的回调 | function(dateArr: [Moment, Moment], dateArrString: [string, string]) => void; | - |


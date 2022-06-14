## TimePicker 时间选择框

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。  
主要区别于 antd 的一个区别就是 antd 时间选择是从 00:00 - 23:59, 而在一些项目中要求使用的是 00:01 - 24:00

### 代码演示

### 基本

```tsx
/**
 * title: 基本
 * desc: 其中`value` 和 `onChange` 需要配合使用。
 */
import React, { useState } from 'react';
import { TimePicker } from 'lanshen';
import type { Moment } from 'moment';

export default () => {
  const [value, setValue] = useState<string>('12:00');
  return (
    <TimePicker
      value={value}
      onChange={(timeString: string) => {
        setValue(timeString);
      }}
    />
  );
};
```

### 禁用

```tsx
/**
 * title: 禁用
 * desc: 禁用时间选择。
 */
import React, { useState } from 'react';
import { TimePicker } from 'lanshen';

export default () => {
  const [value, setValue] = useState<string>('12:00');
  return (
    <TimePicker
      value={value}
      disabled
      onChange={(timeString: string) => {
        setValue(timeString);
      }}
    />
  );
};
```

### 步长选项

```tsx
/**
 * title: 步长选项
 * desc: 可以使用 `hourStep` `minuteStep` 按步长展示可选的时分秒。
 */
import React, { useState } from 'react';
import { TimePicker } from 'lanshen';

export default () => {
  const [value, setValue] = useState<string>('12:00');
  return (
    <TimePicker
      value={value}
      hourStep={2}
      minuteStep={5}
      onChange={(timeString: string) => {
        setValue(timeString);
      }}
    />
  );
};
```

### 禁止选择部分

```tsx
/**
 * title: 禁止选择部分
 * desc: 可以使用 `disabledHours` `disabledMinutes` 禁止选择部分选项
 */
import React, { useState } from 'react';
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
      onChange={(timeString: string) => {
        setValue(timeString);
      }}
    />
  );
};
```

### API

`<TimePicker />`
| 参数 | 说明 | 类型 | 默认值 |
| :---- | :----: | :----: | :----: |
| className | 赋值给整个组件的 className | string | - |
| value | 当前时间 | string | null | null |
| width | 整个 TimePicker 的宽度 | number | 120 |
| disabled | 禁用全部操作 | boolean | false |
| disabledHours | 禁止选择部分小时选项 | function(): void | - |
| disabledMinutes | 禁止选择部分分钟选项 | function(selectedHour: number): void | - |
| minuteStep | 分钟选项间隔 | number | 1 |
| hourStep | 小时选项间隔 | number | 1 |
| onChange | 时间发生变化的回调 | function(timeString: string): void | - |

### FAQ

#### 修复：

1. antd 时间间隔如果是小数，展示出现问题

#### 后续更新计划：

1. 增加秒选项(这个可能需要的时间更长一些)
2. 时间复选多组件校验
3. 点击时间后列表滚动到相应位置

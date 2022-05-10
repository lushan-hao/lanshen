/*
 * @LastEditors: haols
 */
import type { PropsminuteList60, PropsHourList24 } from './type';

export const MinuteList60 = (props: PropsminuteList60) => {
  const { step = 1, hour } = props;
  if (hour === '24') {
    return ['00'];
  }

  let i = 0;
  const result: string[] = [];

  while (i < 60) {
    result.push(`${i > 9 ? '' : '0'}${i}`);
    i += Math.round(step);
  }
  if (hour === '00') {
    result.shift();
  }
  // console.log('minuteList60:', result);
  return result;
};

export const HourList24 = (props: PropsHourList24) => {
  const { step = 1 } = props;
  const hourList: string[] = []; // 时间列表
  let i = 0;
  while (i < 25) {
    hourList.push(`${i > 9 ? '' : '0'}${i}`);
    i += Math.round(step);
  }
  // console.log('hourList:', hourList);
  return hourList;
};

/**
 * @description 获取数组中与目标数值最接近的数值
 * @param {array} arr 需要查找的数组
 * @param {number} num 目标数值，查找的是与这个数值最接近的
 * @return {number} 返回查找到的最接近的数值
 */
function findCloseNum(arr: number[], num: number) {
  let index = 0; // 保存最接近数值在数组中的索引
  let d_value = Number.MAX_VALUE; // 保存差值绝对值，默认为最大数值
  for (let i = 0; i < arr.length; i++) {
    const new_d_value = Math.abs(arr[i] - num); // 新差值
    if (new_d_value <= d_value) {
      // 如果新差值绝对值小于等于旧差值绝对值，保存新差值绝对值和索引
      if (new_d_value === d_value && arr[i] < arr[index]) {
        // 如果数组中两个数值跟目标数值差值一样，取大
        continue;
      }
      index = i;
      d_value = new_d_value;
    }
  }
  return arr[index]; // 返回最接近的数值
}

// 此时的执行函数
export const LocalTime = ({
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
}) => {
  const TimeList: string[] = [];

  // 所以时刻列表
  const allTimeList = hourList?.reduce((acc: number[], item) => {
    const oneHourList = MinuteList?.map((p) => Number(`${item}${p}`)) ?? [];
    return acc.concat(oneHourList);
  }, []);

  const findIndex = findCloseNum(allTimeList, Number(`${List[0]}${List[1]}`));

  const newString = `0000${findIndex}`; // 将少于四位的数字补齐
  TimeList.push(newString.slice(-4, -2)); // 取后四位
  TimeList.push(newString.slice(-2)); // 取后两位

  // 这部分函数是当初做取最近值，但是验证有问题，先弃用
  // const TimeList = List;
  // if (minuteStep && MinuteList.findIndex((p) => p === TimeList[1]) < 0) {
  //   // 将分钟数组和当前时间排序和数字化
  //   const minNumberList = MinuteList.concat(TimeList[1])
  //     .reduce((acc: number[], item: string) => {
  //       return acc.concat([Number(item)]);
  //     }, [])
  //     .sort((a, b) => a - b);
  //   const Index = minNumberList.findIndex((p) => p === Number(TimeList[1]));
  //   // 将找到的值的前一个赋给，没有赋值后面的
  //   TimeList[1] = String(
  //     minNumberList?.[Index - 1] ?? minNumberList?.[Index + 1] ?? TimeList[1],
  //   );
  // }
  // if (hourStep && hourList.findIndex((p) => p === TimeList[0]) < 0) {
  //   const hourNumberList = hourList
  //     .concat(TimeList[0])
  //     .reduce((acc: number[], item: string) => {
  //       return acc.concat([Number(item)]);
  //     }, [])
  //     .sort((a: number, b: number) => a - b);
  //   const Index = hourNumberList.findIndex((p) => p === Number(TimeList[0]));
  //   TimeList[0] = String(
  //     hourNumberList?.[Index - 1] ?? hourNumberList?.[Index + 1],
  //   );
  // }
  return TimeList;
};

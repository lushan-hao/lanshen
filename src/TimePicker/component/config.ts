/*
 * @LastEditors: haols
 */
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

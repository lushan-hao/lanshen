/*
 * @FilePath: \adm_frontend\src\components\DatePickerQuick\Example.tsx
 * @Author: weiman
 * @email: weiman@tsintergy.com
 * @Date: 2021-05-20 14:58:57
 * @LastEditors: weiman
 * @LastEditTime: 2021-05-20 15:12:29
 * @Description: Modify here please
 */
import React, { memo, useState, useEffect, useMemo, useCallback } from 'react';
import { Space, Alert, Form, Button } from 'antd';
import type { RouteProps } from '@/types';
import type { DatePickerOnChangeType } from '@/components/DatePickerQuick';
import RangePickerQuick from '@/components/DatePickerQuick';
import moment from 'moment';

const Index: React.FC<RouteProps> = (props) => {
  const [form] = Form.useForm();

  const onClickSubmit = () => {
    const values = form.getFieldsValue();
    console.log('[debug] ~ onClickSubmit ~ values', values);
  };

  const onChange: DatePickerOnChangeType = (dates, dateStrings) => {
    console.log('[debug] ~ dates, dateStrings', dates, dateStrings);
  };

  return (
    <Space direction="vertical">
      <Alert
        type="success"
        message="本示例文件路径：@/components/RangePickerQuick/Example"
      ></Alert>

      <div>基本使用</div>
      <RangePickerQuick onChange={onChange}></RangePickerQuick>

      <div>默认值</div>
      <RangePickerQuick
        // defaultValue={[moment('2020-01-01'), moment('2020-12-12')]}
        onChange={onChange}
      ></RangePickerQuick>

      <div>时间选择</div>
      <RangePickerQuick showTime onChange={onChange}></RangePickerQuick>

      <div>月份范围选择</div>
      <RangePickerQuick picker="month" onChange={onChange}></RangePickerQuick>

      <div>配合Form使用</div>
      <Form
        layout="inline"
        form={form}
        initialValues={{ dateRange: [moment(), moment().add(1, 'day')] }}
      >
        <Form.Item name="dateRange">
          <RangePickerQuick></RangePickerQuick>
        </Form.Item>
        <Button type="primary" onClick={onClickSubmit}>
          提交
        </Button>
      </Form>
    </Space>
  );
};

export default memo(Index);

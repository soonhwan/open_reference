import React, { useState, useCallback, useEffect, memo } from 'react';
import { AppLayout } from 'components';
import { SubTitle } from 'styles/common';
import { ButtonSt1, ButtonSt2, TooltipSt2, SelectSt2, SelectOptionSt2 } from 'styles/antdStyle';

import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, Space, Tooltip } from 'antd';


const About = () => {
  const { RangePicker } = DatePicker;
  const { Option } = SelectSt2;

  const onClick = useCallback((e) => {
    console.log('onClick === ', e);
  }, [])

  const handleChange = useCallback((e) => {
    console.log('handleChange === ', e);
  }, [])

  return (
    <AppLayout>
      <SubTitle size={24}>회사소개</SubTitle>

      <ButtonSt1 size={20} type="link" onClick={onClick}>버튼</ButtonSt1>
      <br /><br />
      <ButtonSt2 type="text" onClick={onClick}>버튼2</ButtonSt2>
      <br /><br />
      <ButtonSt2 disabled onClick={onClick}>버튼 disabled</ButtonSt2>
      <br /><br />
      {/* <Tooltip  title="search">
        <TooltipSt2 />
        <ButtonSt1 type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Tooltip  title="search2222">
        <TooltipSt2 />
        <ButtonSt1 type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip> */}
      <br /><br />
      <SelectSt2 defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <SelectOptionSt2 />
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </SelectSt2>
      <br /><br />

      <Space direction="vertical" size={12}>
        <RangePicker />
        <RangePicker showTime />
        <RangePicker picker="week" />
        <RangePicker picker="month" />
        <RangePicker picker="year" />
      </Space>
    </AppLayout>
  )
}

export default About;
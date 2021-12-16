import React, { useState, useCallback, useEffect, memo } from 'react';
import { AppLayout } from 'components';
import { SubTitle } from 'styles/common';
import { WC } from 'styles/antdStyle';

import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, Space, Button, Select } from 'antd';




const About = () => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  const onClick = useCallback((e) => {
    console.log('onClick === ', e);
  }, [])

  const handleChange = useCallback((e) => {
    console.log('handleChange === ', e);
  }, [])

  return (
    <AppLayout>
      <SubTitle size={24}>회사소개</SubTitle>

      <WC.Button className="btn-st1" size={20} type="link" onClick={onClick}>버튼</WC.Button>      
      <br /><br />
      <WC.Button  className="btn-st2" type="text" onClick={onClick}>버튼2</WC.Button>
      <br /><br />
      <WC.Button disabled onClick={onClick}>버튼 disabled</WC.Button>
      <br /><br />

      <WC.Tooltip 
        title="search"
        className="tooltip-st1"
        overlayClassName="tooltip-st1"
      >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </WC.Tooltip>
      <WC.Tooltip  
        title="search2222"
        className="tooltip-st2"
        overlayClassName="tooltip-st2"
      >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </WC.Tooltip>
      <br /><br />

      <WC.Select
        defaultValue="lucy" 
        style={{ width: 120 }} 
        onChange={handleChange}
        className="select-st1"
        dropdownClassName="select-st1"
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </WC.Select>
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
import React, { useState, useCallback, useEffect, memo } from 'react';
import { AppLayout } from 'components';
import { SubTitle } from 'styles/common';
import { W } from 'styles/antdStyle';

import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { DatePicker, Space, Button, Select, Menu } from 'antd';


const About = () => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  const [show, setShow] = useState(false);

  const onClick = useCallback((e) => {
    console.log('onClick === ', e);
  }, [])

  const handleChange = useCallback((e) => {
    console.log('handleChange === ', e);
  }, [])

  useEffect(() => {
    setTimeout(function(){
      setShow(true)
    }, 1000);
  }, []);


  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <AppLayout>
      <SubTitle size={24}>회사소개</SubTitle>

      <W.Button className="type01" size={20} type="link" onClick={onClick}>버튼</W.Button><br /><br />
      
      {show && <W.Button  className="type02" type="text" onClick={onClick}>버튼2</W.Button>}<br /><br />

      <Button size={24} type="primary" onClick={onClick}>antd 버튼</Button><br /><br />
      
      <Button type="primary" disabled onClick={onClick}>antd 버튼 disabled</Button><br /><br />

      <Button type="dashed" onClick={onClick}>antd 버튼</Button><br /><br />

      <W.Tooltip 
        title="search"
        className="type01"
        overlayClassName="type01"
      >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </W.Tooltip>

      <W.Tooltip  
        title="search2222"
        className="type02"
        overlayClassName="type02"
      >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </W.Tooltip>

      <br /><br />

      <W.Select
        defaultValue="lucy" 
        style={{ width: 120 }} 
        onChange={handleChange}
        className="type01"
        dropdownClassName="type01"
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </W.Select>

      <br /><br />

      <W.Dropdown 
        overlay={menu}
        className="type01" 
        overlayClassName="type01" 
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </W.Dropdown>

      <W.Dropdown 
        overlay={menu}
        className="type02" 
        overlayClassName="type02" 
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </W.Dropdown>

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
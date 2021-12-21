import React, { useState, useCallback, useEffect, memo } from 'react';
import { AppLayout, SampleAntd } from 'components';
import { Typography, DatePicker, Space, Button, Select, Menu, Tooltip, Dropdown } from 'styles/antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';

const { Title, Link, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const Main = () => {
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
      <Title>메인</Title>

      <Space direction="vertical">
        <Text>Ant Design (default)</Text>
        <Text type="secondary">Ant Design (secondary)</Text>
        <Text type="success">Ant Design (success)</Text>
        <Text type="warning">Ant Design (warning)</Text>
        <Text type="danger">Ant Design (danger)</Text>
        <Text disabled>Ant Design (disabled)</Text>
        <Text mark>Ant Design (mark)</Text>
        <Text code>Ant Design (code)</Text>
        <Text keyboard>Ant Design (keyboard)</Text>
        <Text underline>Ant Design (underline)</Text>
        <Text delete>Ant Design (delete)</Text>
        <Text strong>Ant Design (strong)</Text>
        <Text italic>Ant Design (italic)</Text>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Space>

      <Button className="type01" size={20} type="link" onClick={onClick}>버튼</Button><br /><br />
      
      {show && <Button  className="type02" type="text" onClick={onClick}>버튼2</Button>}<br /><br />

      <Button size={24} type="primary" onClick={onClick}>antd 버튼</Button><br /><br />
      
      <Button type="primary" disabled onClick={onClick}>antd 버튼 disabled</Button><br /><br />

      <Button type="dashed" onClick={onClick}>antd 버튼</Button><br /><br />

      <Tooltip 
        title="search"
        className="type01"
        overlayClassName="type01"
      >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>

      <Tooltip  
        title="search2222"
        className="type01"
        overlayClassName="type01"
      >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>

      <Tooltip 
        title="search"
        className="type01"
        overlayClassName="type01"
      >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>

      <Tooltip  
        title="search2222"
        className="type01"
        overlayClassName="type01"
      >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>

      <br /><br />

      <Select
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
      </Select>

      <Select
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
      </Select>

      <br /><br />

      <Dropdown 
        overlay={menu}
        className="type01" 
        overlayClassName="type01" 
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>

      <Dropdown 
        overlay={menu}
        className="type02" 
        overlayClassName="type02" 
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>

      <br /><br />

      <Space direction="vertical" size={12}>
        <RangePicker />
        <RangePicker showTime />
        <RangePicker picker="week" />
        <RangePicker picker="month" />
        <RangePicker picker="year" />
      </Space>

      <SampleAntd />
           
    </AppLayout>
  )
}

export default Main;
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Gnb } from 'components';
import { Layout, Menu } from 'styles/antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub4', 'sub7'];

const AppLayout = ({ children }) => {

  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      <div id="wrapper">
        <Header />
        <Layout>
          <Sider className="site-layout-background">
            <Menu
              mode="inline"
              openKeys={openKeys} 
              onOpenChange={onOpenChange}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <SubMenu key="sub2" title="Submenu 1-1">
                  <Menu.Item key="1">Option 1-1-1</Menu.Item>
                  <Menu.Item key="2">Option 1-1-2</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Submenu 1-2">
                  <Menu.Item key="3">Option 1-2-1</Menu.Item>
                  <Menu.Item key="4">Option 1-2-2</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<LaptopOutlined />} title="subnav 2">
                <SubMenu key="sub5" title="Submenu 2-1">
                  <Menu.Item key="5">Option 2-1-1</Menu.Item>
                  <Menu.Item key="6">Option 2-1-2</Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title="Submenu 2-2">
                  <Menu.Item key="7">Option 2-2-1</Menu.Item>
                  <Menu.Item key="8">Option 2-2-2</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub7" icon={<NotificationOutlined />} title="subnav 3">
                <SubMenu key="sub8" title="Submenu">
                  <Menu.Item key="9">Option 3-1-1</Menu.Item>
                  <Menu.Item key="10">Option 3-1-2</Menu.Item>
                </SubMenu>
                <SubMenu key="sub9" title="Submenu">
                  <Menu.Item key="11">Option 3-2-1</Menu.Item>
                  <Menu.Item key="12">Option 3-2-2</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: '100vh',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
        <Footer />
      </div>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(AppLayout);
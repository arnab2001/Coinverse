// import React from 'react'
// import { Button, Menu, Typography, Avatar } from 'antd'
// import { Link } from 'react-router-dom'
// import { HomeOutlined, SlidersTwoTone , BulbTwoTone , FundTwoTone, MenuOutlined } from '@ant-design/icons'
// import icon from '../images/cryptocurrency.png' 
// import {Exchanges,Homepage,Cryptocurrencies,News,CryptoDetailes} from './index'

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 
    HomeOutlined,
    SlidersOutlined,
    FundOutlined,
    RocketOutlined,
    BulbOutlined

} from '@ant-design/icons';
import { Image,Layout, Menu, Space, theme, Typography ,Avatar} from 'antd';
import { Route, Routes } from 'react-router';
import Homepage from './Homepage';
import Exchanges from './Exchanges';
import Cryptocurrencies from './Cryptocurrencies';
import CryptoDetailes from './CryptoDetailes';
import News from './News';
import Link from 'antd/es/typography/Link';
import icon from '../images/cryptocurrency.png';
import './nav.css'


const Navbar = () => {
    const { Header, Sider, Content } = Layout;

const [collapsed, setCollapsed] = useState(false);
const {
  token: { colorBgContainer },
} = theme.useToken();
  return (
    <>
    {/* <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"  />
            <Typography.Title level={3} className='logo'> 
                <Link to='/'>Coinverse</Link>
            </Typography.Title>
             {/* <Button className='menu-control-container'> 
                <MenuOutlined />
            </Button> 
            </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>

            <Menu.Item icon={<FundTwoTone twoToneColor="#ee98fb" />}>
                <Link to='/Cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>

            <Menu.Item icon={<SlidersTwoTone twoToneColor="#52c41a" />}>
                <Link to='/Exchanges'>Exchanges</Link>
            </Menu.Item>

            <Menu.Item icon={ <BulbTwoTone />}>
                <Link to='/News'>News</Link>
            </Menu.Item>
        </Menu>

  </div> */}

{/**----------code----- */}

    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        
       <div className="logo" > 
       
            <Image src={icon} preview={false} />
            <Typography.Title level={3} >
                <Link to="/">Coinverse</Link>
            </Typography.Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'home',
              onClick: () => window.location.href='/',
            },
            {
              key: '2',
              icon: <SlidersOutlined />,
                label: 'Cryptocurrencies',
                onClick: () => window.location.href='/Cryptocurrencies',

            },
            {
              key: '3',
              icon: <BulbOutlined/>,
              label: 'Crypto News',
              onClick: () => window.location.href='/News',
            },
          ]}
          />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ paddingLeft: "1rem", background: colorBgContainer ,fontSize:"1.8rem"}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content>
     <div className="main" >
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/Exchanges' element={<Exchanges/>}/>
                        <Route path='/Cryptocurrencies' element={<Cryptocurrencies/>}/>
                        <Route path='/crypto/:coinId' element={<CryptoDetailes/>}/>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                </div>
                
            </Layout>
        <div className="footer">
            <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
                Coinverse<br/>
                All rights reserved 
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>

            </Space>
            </div>
        </div>
        </Content> 
      </Layout>
    </Layout>
  

  </>

    
)
}

export default Navbar
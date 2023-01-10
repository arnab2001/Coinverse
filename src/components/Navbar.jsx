import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, SlidersOutlined , BulbTwoTone , FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png' 
import {Exchanges,Homepage,Cryptocurrencies,News,CryptoDetailes} from './index'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"  />
            <Typography.Title level={2} className='logo'> 
                <Link to='/'>Coinverse</Link>
            </Typography.Title>
             {/* <Button className='menu-control-container'> 
                <MenuOutlined />
            </Button> */}
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>

            <Menu.Item icon={<FundOutlined />}>
                <Link to='/Cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>

            <Menu.Item icon={<SlidersOutlined />}>
                <Link to='/Exchanges'>Exchanges</Link>
            </Menu.Item>

            <Menu.Item icon={ <BulbTwoTone />}>
                <Link to='/News'>News</Link>
            </Menu.Item>
        </Menu>

    </div>
    </div>
  )
}

export default Navbar
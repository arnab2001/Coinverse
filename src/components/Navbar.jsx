// import React from 'react'
// import { Button, Menu, Typography, Avatar } from 'antd'
// import { Link } from 'react-router-dom'
// import { HomeOutlined, SlidersTwoTone , BulbTwoTone , FundTwoTone, MenuOutlined } from '@ant-design/icons'
// import icon from '../images/cryptocurrency.png' 
// import {Exchanges,Homepage,Cryptocurrencies,News,CryptoDetailes} from './index'

import React, { useState, useCallback, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 
    HomeOutlined,
    SlidersOutlined,
    FundOutlined,
    RocketOutlined,
    BulbOutlined,
    BookOutlined,
    LineOutlined

} from '@ant-design/icons';
import {Row,Col, Image,Layout, Menu, Space, theme, Typography, Avatar} from 'antd';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import Exchanges from './Exchanges';
import Cryptocurrencies from './Cryptocurrencies';
import CryptoDetailes from './CryptoDetailes';
import News from './News';
import icon from '../images/cryptocurrency.png';
import './nav.css';
import ToggleMode from './ToggleMode';
import Bookmarks from './Bookmarks';
import BookmarkService from '../services/bookmarkService';
// import Facebook from '../images/icons8-facebook-30.png';

const Navbar = () => {


  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  const [selectedMenuItem, setSelectedMenuItem] = useState(['/']);
  const [coins, setCoins] = useState(BookmarkService.coinArray());

  const handleClick = e => setSelectedMenuItem(e.key);
  const reRender = (callback) => {
    setCoins(callback());
  }

  const sendCoins = () => {
    return coins;
  };

  useEffect(() => {
    if(selectedMenuItem !== window.location.pathname)
      setSelectedMenuItem(window.location.pathname)
  }, [selectedMenuItem])

  return (
    <>
    <Layout className='main_component' >
      <Sider className='sidebar' trigger={null} collapsible collapsed={collapsed}>
       <div className="logo" > 
          <Row style={{width:"100%"}} type="flex" align="center">
            <Col> 
              <Image className='icon-logo' src={icon} preview={false} />
            </Col>
            <Col>
              <Typography.Title level={5} >
                  <Link to="https://coinverse-delta.vercel.app/" onClick={handleClick}>Coinverse</Link>
              </Typography.Title>
            </Col>
          </Row>
        </div>
        <Menu
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={'/'}
          selectedKeys={[selectedMenuItem]}
          onClick={handleClick}
        >
          <Menu.Item key="/" icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/Cryptocurrencies" icon={<SlidersOutlined/>}>
            <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key="/News" icon={<BulbOutlined/>}>
            <Link to="/News">News</Link>
          </Menu.Item>
          <Bookmarks sendCoins={sendCoins}/>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ paddingLeft: "1rem",fontSize:"1.8rem"}} className='nav-head'>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div class="contentt"><h2 id="h2-tag">Coinverse</h2><h2 id="h2-tag">Coinverse</h2></div>
          <ToggleMode/>
        </Header>
        <Content>
          <div className="main" >
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route path='/' element={<Homepage onClick={handleClick}/>}/>
                    <Route path='/Exchanges' element={<Exchanges/>}/>
                    <Route path='/Cryptocurrencies' element={<Cryptocurrencies onClick={handleClick}/>}/>
                    <Route path='/crypto/:coinId' element={<CryptoDetailes update={reRender}/>}/>
                    <Route path='/news' element={<News/>}/>
                </Routes>
              </div> 
            </Layout>
            <Layout.Footer className='footer' style={{background: '#002547', color: 'white', padding: '15px' }}>
              <h4 style={{color: 'grey', paddingLeft:'125px'}}>Made with ❤️ by Community</h4>
              <br/>
              <Row className='row'>
                <Col className='tech'>
                  <h3>Technologies Used</h3>
                  <br/>
                  <div id="underline1"></div>
                  <br/>
                  <p id="tecnologies-division">
                    <span>
                      <a class="footer-links" style={{color:'grey'}} href="https://rapidapi.com/Coinranking/api/coinranking1">Coinranking API&nbsp;</a>
                      <br/>
                      <a class="footer-links" style={{color:'grey'}} href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/">Bing News API</a>
                      <br/>
                      <a class="footer-links" style={{color:'grey'}} href="https://reactjs.org/">React</a>
                      <br/>
                    </span>
                    <span>
                      <a class="footer-links" style={{color:'grey'}} href="https://ant.design/">Ant Design</a>
                      <br/>
                      <a class="footer-links" style={{color:'grey'}} href="https://redux.js.org/">Redux</a>
                      <br/>
                      <a class="footer-links" style={{color:'grey'}} href="https://reactrouter.com/en/main">React Router</a>
                    </span>
                  </p>
                </Col>
                <Col className='socials'>
                  <h3>Follow Us</h3>
                  <br/>
                  <div id="underline2"></div>
                  <br/>
                  <p>
                    <a href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-facebook-30.png')} alt=""/></a>&nbsp;
                    <a href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-instagram-50.png')} alt=""/></a>&nbsp;
                    <a href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-twitter-30.png')} alt=""/></a>&nbsp;
                    <a href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-github-30.png')} alt=""/></a>&nbsp;
                    <a href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-linkedin-circled-30.png')} alt=""/></a>&nbsp;
                  </p>
                </Col>
                <Col id='link'>
                  <h3>Links</h3>
                  <br/>
                  <div id="underline3"></div>
                  <br/>
                  <p>
                    <a href="/" style={{color: 'grey'}}>Home<br/></a>
                    <a href="/Cryptocurrencies" style={{color: 'grey'}}>Cryptocurrencies<br/></a>
                    <a href="/News" style={{color: 'grey'}}>Crypto News<br/></a>
                  </p>
                </Col>
              </Row>
            </Layout.Footer>
          </div>
        </Content> 
      </Layout>
    </Layout>
  </> 
)
}

export default Navbar
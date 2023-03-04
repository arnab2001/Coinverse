// import React from 'react'
// import { Button, Menu, Typography, Avatar } from 'antd'
// import { Link } from 'react-router-dom'
// import { HomeOutlined, SlidersTwoTone , BulbTwoTone , FundTwoTone, MenuOutlined } from '@ant-design/icons'
// import icon from '../images/cryptocurrency.png
// import {Exchanges,Homepage,Cryptocurrencies,News,CryptoDetailes} from './index'

import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 
    HomeOutlined,
    SlidersOutlined,
    BulbOutlined

} from '@ant-design/icons';
import {Row,Col, Image,Layout, Menu, Typography} from 'antd';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import Exchanges from './Exchanges';
import Cryptocurrencies from './Cryptocurrencies';
import CryptoDetailes from './CryptoDetailes';
import News from './News';
import iconM from '../images/coinverse-logo-m.png';
import './nav.css';
import ToggleMode from './ToggleMode';
import Bookmarks from './Bookmarks';
import BookmarkService from '../services/bookmarkService';

import BackupNews from './BackupNews';

// import Facebook from '../images/icons8-facebook-30.png';


const Navbar = () => {


  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  const [selectedMenuItem, setSelectedMenuItem] = useState(['/']);
  const [coins, setCoins] = useState(BookmarkService.coinArray());
  //const [logo, setLogo] = useState(icon);
  //const [link, setLink] = useState({display: "none"});

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
              <Image className='icon-logo' src={iconM} preview={false} />
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
          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: <Link to="/">Home</Link>,
            },
            {
              key: '/Cryptocurrencies',
              icon: <SlidersOutlined />,
              label: <Link to="/Cryptocurrencies">Cryptocurrencies</Link>,
            },
            {
              key: '/BackupNews',
              icon: <BulbOutlined/>,
              label: <Link to="/BackupNews">News</Link>,
            },
          ]}
        />
          <Bookmarks sendCoins={sendCoins} handleClick={handleClick}/>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ paddingLeft: "1rem",fontSize:"1.8rem"}} className='nav-head'>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className="contentt"><h2 id="h2-tag">Coinverse</h2><h2 id="h2-tag">Coinverse</h2></div>
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
                    <Route path='/Backupnews' element={<BackupNews />}/>
                </Routes>
              </div> 
            </Layout>
            <Layout.Footer className='footer' style={{background: '#002547', color: 'white', padding: '15px' }}>
              <h4 id="footercomment">Made with ❤️ by Community</h4>
              <br/>
              <Row className='row'>
                <Col className='tech'>
                  <h3 id="tech-h3">Technologies Used</h3>
                  <br/>
                  <div id="underline1"></div>
                  <br/>
                  <div id="div-container-techlinks">
                    <div class="tecnologies-division1">
                      <div class="tech-div"><a class="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://rapidapi.com/Coinranking/api/coinranking1">Coinranking API&nbsp;</a></div>
                      <br/>
                      <div class="tech-div"><a class="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/">Bing News API</a></div>
                      <br/>
                      <div class="tech-div"><a class="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://reactjs.org/">React</a></div>
                      <br/>
                    </div>
                    <div class="tecnologies-division2">
                      <div class="tech-div"><a class="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://ant.design/">Ant Design</a></div>
                      <br/>
                      <div class="tech-div"><a class="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://redux.js.org/">Redux</a></div>
                      <br/>
                      <div class="tech-div"><a class="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://reactrouter.com/en/main">React Router</a></div>
                    </div>
                  </div>
                </Col>
                <Col className='socials'>
                  <h3 id="social-h3">Follow Us</h3>
                  <br/>
                  <div id="underline2"></div>
                  <br/>
                  <p>
                    <div class="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-facebook-50 (1).png')} alt=""/></a></div>
                    <div class="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-instagram-50.png')} alt=""/></a></div>
                    <div class="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-twitter-50.png')} alt=""/></a></div>
                    <div class="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img class="social-icon" id="github-icon" src={require('../images/icons8-github-50.png')} alt=""/></a></div>
                    <div class="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img class="social-icon" src={require('../images/icons8-linkedin-circled-50.png')} alt=""/></a></div>
                  </p>
                </Col>

                {/* <Col className='link'>
                  <h3 id="link-h3">Links</h3> */}

                <Col id='link'>
                  <h3>Links</h3>

                  <a href="/" style={{ color: 'grey' }}>Home</a>
                  &nbsp; &nbsp;
                  <a href="/Cryptocurrencies" style={{ color: 'grey' }}>Cryptocurrencies</a>
                  &nbsp; &nbsp;
                  <a href="/BackupNews" style={{ color: 'grey' }}>Crypto News</a>

                  <br/>
                  <div id="underline3"></div>
                  <br/>
                  <p>
                    <div id="home"><a class="link-links" href="/" target="_blank" rel="noreferrer" style={{color: 'grey'}}>Home<br/></a></div>
                    <div id="crypto-currencies"><a class="link-links" href="/Cryptocurrencies" target="_blank" rel="noreferrer" style={{color: 'grey'}}>Cryptocurrencies<br/></a></div>
                    <div id="cryto-news"><a class="link-links" href="/News" target="_blank" rel="noreferrer" style={{color: 'grey'}}>Crypto News<br/></a></div>
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

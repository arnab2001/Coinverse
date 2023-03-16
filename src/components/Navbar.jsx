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
    BulbOutlined,
    BookOutlined

} from '@ant-design/icons';
import {Row,Col, Image,Layout, Menu, Typography} from 'antd';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import Exchanges from './Exchanges';
import Cryptocurrencies from './Cryptocurrencies';
import CryptoDetailes from './CryptoDetailes';
import News from './News';
import AboutUs from './AboutUs';
import iconM from '../images/coinverse-logo-m.png';
import './nav.css';
import ToggleMode from './ToggleMode';
import Bookmarks from './Bookmarks';
import BookmarkService from '../services/bookmarkService';
import Error from './Error';

// import BackupNews from './BackupNews';

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

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  const sendCoins = () => {
    return coins;
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  useEffect(() => {
    if(selectedMenuItem !== window.location.pathname)
      setSelectedMenuItem(window.location.pathname)
  }, [selectedMenuItem])

  return (
    <>
       <Layout className='main_component' >
        <Sider className="sidebar" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" > 
              <Row style={{width:"100%"}} type="flex" align="center">
                <Col> 
                  <Image className='icon-logo' src={iconM} preview={false} />
                </Col>
                <Col>
                  <Typography.Title level={5} >
                      <Link to="/" onClick={handleClick}>Coinverse</Link>
                  </Typography.Title>
                </Col>
              </Row>
            </div>
          <Menu
            theme="dark"
            style={{background: 'none'}}
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
                key: '/News',
                icon: <BulbOutlined/>,
                label: <Link to="/News">News</Link>,
              },
            ]}
          />
          <Bookmarks sendCoins={sendCoins} handleClick={handleClick}/>
      </Sider>
      <Layout className="site-layout">
      <Header style={{ paddingLeft: "1rem", fontSize: "1.8rem",
        maxWidth: collapsed ? "calc(100% - 80px)" : "calc(100% - 200px)",
        transform: collapsed ? `translateX(80px)` : `translateX(200px)`}} className='nav-head'>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className="contentt"><h2 id="h2-tag">Coinverse</h2><h2 id="h2-tag">Coinverse</h2></div>
          <ToggleMode/>
        </Header>
        <Content>
        <div className="main" style={{ transform: collapsed ? `translateX(80px)` : `translateX(200px)`,
          maxWidth: collapsed ? "calc(100% - 80px)" : "calc(100% - 200px)"}}>
            <Layout>
                <div className='routes'>
                <Routes>
                  <Route path='/' element={<Homepage onClick={handleClick} update={reRender}/>}/>
                    <Route path='/Exchanges' element={<Exchanges/>}/>
                    <Route path='/Cryptocurrencies' element={<Cryptocurrencies onClick={handleClick} update={reRender}/>}/>
                    <Route path='/crypto/:coinId' element={<CryptoDetailes update={reRender}/>}/>
                    <Route path='/News' element={<News update={reRender}/> }/>
                    <Route path='/AboutUs' element={<AboutUs update={reRender}/> }/>
                    <Route path='*' element={<Error />}/>
                </Routes>
              </div> 
            </Layout>
            <Layout.Footer className='footer' style={{padding: '15px', left:"0" }}>
              <h4 id="footercomment" >Made with ❤️ by Community</h4>
              <br/>
              <Row className='row'>
                <Col className='tech'>
                  <h3 id="tech-h3">Technologies Used</h3>
                  <div id="underline1"></div>
                  <br/>
                  <div id="div-container-techlinks">
                    <div className="tecnologies-division1">
                      <div className="tech-div"><a className="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://rapidapi.com/Coinranking/api/coinranking1">Coinranking API&nbsp;</a></div>
                      <div className="tech-div"><a className="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/">Bing News API</a></div>
                      <div className="tech-div"><a className="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://reactjs.org/">React</a></div>
                    </div>
                    <div className="tecnologies-division2">
                      <div className="tech-div"><a className="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://ant.design/">Ant Design</a></div>
                      <div className="tech-div"><a className="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://redux.js.org/">Redux</a></div>
                      <div className="tech-div"><a className="footer-links" target="_blank" rel="noreferrer" style={{color:'grey'}} href="https://reactrouter.com/en/main">React Router</a></div>
                    </div>
                  </div>
                  <br/>
                </Col>
                <Col className='socials'>
                  <h3 id="social-h3">Follow Us</h3>
                  <div id="underline2"></div>
                  <br/>
                  <div className="social-icons">
                    <div className="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img className="social-icon" src={require('../images/icons8-facebook-50 (1).png')} alt=""/></a></div>
                    <div className="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img className="social-icon" src={require('../images/icons8-instagram-50.png')} alt=""/></a></div>
                    <div className="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img className="social-icon" src={require('../images/icons8-twitter-50.png')} alt=""/></a></div>
                    <div className="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img className="social-icon" id="github-icon" src={require('../images/icons8-github-50.png')} alt=""/></a></div>
                    <div className="social-icon-div"><a target="_blank" rel="noreferrer" href="https://www.google.co.in/"><img className="social-icon" src={require('../images/icons8-linkedin-circled-50.png')} alt=""/></a></div>
                  </div>
                  <br/>
                </Col>
                <Col className='link'>
                  <h3 id="links-section-h3">Links</h3>
                  <div id="underline3"></div>
                  <br/>
                  <div className="link-links">
                    <div id="home"><a className="link-link" href="/" target="_blank" rel="noreferrer" style={{color: 'grey'}}>Home<br/></a></div>
                    <div id="aboutus"><a className="link-link" href="/AboutUs" target="_blank" rel="noreferrer" style={{color: 'grey'}}>About Us<br/></a></div>
                    <div id="crypto-currencies"><a className="link-link" href="/Cryptocurrencies" target="_blank" rel="noreferrer" style={{color: 'grey'}}>Cryptocurrencies<br/></a></div>
                    <div id="crypto-news"><a className="link-link" href="/News" target="_blank" rel="noreferrer" style={{color: 'grey'}}>Crypto News<br/></a></div>
                    <div id="google_translate_element"/>
                  </div>
                  <br/>
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
import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Layout, Typography,Space  } from  'antd'
import {Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetailes} from './components/index'
import './App.css'
const App = () => {
  return (
    <div className="app">

        <nav className="navbar">
             <Navbar /> 
        </nav>

        <div class Name="main">
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
    </div>
  )
}

export default App
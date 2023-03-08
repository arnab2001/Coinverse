import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Button} from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import {Cryptocurrencies,News} from '../components'
import Loader from './loader'
const { Title } = Typography



const Homepage = ({onClick, update}) => {
  const { data, isFetching } = useGetCryptosQuery(10)
 
  // const globalStats = data.data.stats;
  const globalStats = data?.data?.stats;

  //console.log(globalStats)
  if(isFetching) return <Loader />

  return (
    <div className='homePage-mainContainer'>
      <div className='top-heading'>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[8,16]} className="stats-card-container">
        <Col sm={24} md={12} xl={8}>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_title">
                <Statistic title="Total Crypto Currencies" value={globalStats.total}/>
              </div>
              <div class="ag-courses-item_bg-container">
                <div class="ag-courses-item_bg"></div>
              </div>
            </a>
          </div>
        </Col>
        <Col sm={24} md={12} xl={8}>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_title">
                <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/>
              </div>
              <div class="ag-courses-item_bg-container">
                <div class="ag-courses-item_bg"></div>
              </div>
            </a>
          </div>
        </Col>
        <Col sm={24} md={12} xl={8}>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_title">
                <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/>
              </div>
              <div class="ag-courses-item_bg-container">
                <div class="ag-courses-item_bg"></div>
              </div>
            </a>
          </div>
        </Col>
        <Col sm={24} md={12} xl={8}>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_title">
                <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/>
              </div>
              <div class="ag-courses-item_bg-container">
                <div class="ag-courses-item_bg"></div>
              </div>
            </a>
          </div>
        </Col>
        <Col sm={24} md={12} xl={8}>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_title">
                <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/>
              </div>
              <div class="ag-courses-item_bg-container">
                <div class="ag-courses-item_bg"></div>
              </div>
            </a>
          </div>
        </Col>
      </Row>
      </div>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more">
          <Button type="default" size="large">
            <Link to="/Cryptocurrencies" onClick={onClick}><p id="show-more-text">Show More</p></Link>
          </Button>
        </Title>
      </div>
      <Cryptocurrencies simplified onClick={onClick} update={update}/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more">
          <Button type="default" size="large">
            <Link to="/News" onClick={onClick}><p id="show-more-text">Show More</p></Link>
          </Button>
        </Title>
      </div>
      <News simplified onClick={onClick}/>
      {/* //simplified is a prop that we pass to the News component  */}

      {/* <BackupNews simplified onClick={onClick}/> */}
      
    </div>
  )
}

export default Homepage
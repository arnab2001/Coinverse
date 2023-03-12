import React, { useRef, useState, useEffect } from "react";
import millify from 'millify'
import { Typography, Row, Col, Statistic, Button} from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import {Cryptocurrencies,News} from '../components'
import { FaArrowUp } from "react-icons/fa";
import Loader from './loader'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const { Title } = Typography

// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination, Mousewheel, Keyboard],
//   // Optional parameters
//   loop: true,
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination', clickable: true ,
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });

const Homepage = ({onClick, update}) => {
  const { data, isFetching } = useGetCryptosQuery(10)

  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listentoScroll = () => {
    let heightToHidden = 25;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listentoScroll);
    return () => window.removeEventListener("scroll", listentoScroll);
  }, []);
 
  // const globalStats = data.data.stats;
  const globalStats = data?.data?.stats;

  //console.log(globalStats)
  if(isFetching) return <Loader />

  

  return (
    <>
    
    <div className='homePage-mainContainer'>
      <div className='top-heading'>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row gutter={[8,16]} className="stats-card-container">
        <Swiper
          cssMode={true}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Col xs={24} sm={24} md={12} xl={8}>
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
          </SwiperSlide>
          <SwiperSlide>
            <Col xs={24} sm={24} md={12} xl={8}>
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
          </SwiperSlide>
          <SwiperSlide>
            <Col xs={24} sm={24} md={12} xl={8}>
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
          </SwiperSlide>
          <SwiperSlide>
            <Col xs={24} sm={24} md={12} xl={8}>
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
          </SwiperSlide>
          <SwiperSlide>
            <Col xs={24} sm={24} md={12} xl={8}>
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
          </SwiperSlide>
        </Swiper>
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
    </div>
    {isVisible && (
      <div className="top-btn" onClick={goToBtn}>
        <FaArrowUp className="uparrow"></FaArrowUp>
      </div>
      )}
    </>
  );
}

export default Homepage
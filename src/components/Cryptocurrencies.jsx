import React ,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import millify from 'millify'
import {Card, Input, Row, Col, Button } from 'antd'
import { BookOutlined } from '@ant-design/icons';

import BookmarkService from '../services/bookmarkService';
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './loader'

const Cryptocurrencies = ({simplified, onClick, update}) => {
  const count = simplified ? 10 : 100  // 10 is the number of coins in home page and 100 is the number of coins in the crypto page
  const {data: cryptosList, isFetching} = useGetCryptosQuery( count ) //this is the hook
  const [cryptos, setCryptos] = useState() //this is the state
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  const propagateBookmark = (coinId) => {
    console.log("Bookmark button clicked.");

    const set = BookmarkService.setBookmark(coinId);
    let element = document.getElementById(coinId);
    if(set){
      element.classList.remove("not-bookmarked");
      element.classList.add("bookmarked");
    } else {
      element.classList.remove("bookmarked");
      element.classList.add("not-bookmarked");
    }
  }

  const returnCoins = () => {
    return BookmarkService.coinArray();
  }

  if(isFetching) return <Loader />

  let cardBgColor= (document.body.className === 'light-mode') ? '#ffff' : 'rgb(27, 27, 27)';
  let cardColor= (document.body.className === 'light-mode') ? 'black' : '#fff';
  
  return (
    <>
    {!simplified && ( //if simplified is true then show the search bar

    <div className="search-crypto">
      <Input placeholder="Search Cryptocurrency"
       onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />

       </div>
    )}
      <Row gutter={[8,16]} className="crypto-card-container">
         {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <div className="container-card">
              <div className="card-grid">
                <div className="card-bm">
                  <Button className={BookmarkService.validateBookMark(currency.uuid) ? 'bookmarked' : 'not-bookmarked'} id={currency.uuid} icon={<BookOutlined />} onClick={() => {propagateBookmark(currency.uuid); update(returnCoins)}}></Button>
                </div>
                <div className="card-details">
                  <Link to={`/crypto/${currency.uuid}`} onClick={onClick}>
                    <Card 
                      className="card"
                      title={`${currency.rank}. ${currency.name}`}
                      extra={<img className="crypto-image" src={currency.iconUrl} alt='crypto-logo' />}
                      hoverable
                      >
                      <p>Price: {millify(currency.price)}</p>
                      <p>Market Cap: {millify(currency.marketCap)}</p>
                      <p>Daily Change: &nbsp;
                      {millify(currency.change) < 0 ? (
                        <span style={{color: 'red'}}>{millify(currency.change)}% </span>
                      ) : (
                        <span style={{color: 'green'}}>{millify(currency.change)}% </span>
                      )}</p>
                    </Card>
                  </Link>
                </div>
                <div className="card-bg"></div>
              </div>
            </div>
          </Col>
        ))} { console.log(cryptos)}
      </Row>
    </>
  )
}

export default Cryptocurrencies
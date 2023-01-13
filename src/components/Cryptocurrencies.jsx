import React ,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import millify from 'millify'
import {Card, Input, Row, Col, Statistic } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'


const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100  // 10 is the number of coins in home page and 100 is the number of coins in the crypto page
  const {data: cryptosList, isFetching} = useGetCryptosQuery( count ) //this is the hook 
  const [cryptos, setCryptos] = useState() //this is the state
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if(isFetching) return 'Loading...'
  
  return (
    <>
    {!simplified && ( //if simplified is true then show the search bar

    <div className="search-crypto">
      <Input placeholder="Search Cryptocurrency"
       onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
    </div>
    )}
      <Row gutter={[32,32]} className="crypto-card-container">
         {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Price: {millify(currency.marketCap)}</p>
                  <p>Daily Change: &nbsp;
                  {millify(currency.change) < 0 ? (
                    <span style={{color: 'red'}}>{millify(currency.change)}% </span>
                  ) : (
                    <span style={{color: 'green'}}>{millify(currency.change)}% </span>
                  )}</p>
                  

                

              </Card>
            </Link>
          </Col>
        ))} { console.log(cryptos)}
      </Row>
    </>
  )
}

export default Cryptocurrencies
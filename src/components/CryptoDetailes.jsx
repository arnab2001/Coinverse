import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import { Typography, Row, Col,Select, Button } from 'antd'
import { MoneyCollectOutlined, 
         DollarCircleOutlined,
         FundOutlined, 
         ExclamationCircleOutlined, 
         StopOutlined, 
         TrophyOutlined, 
         CheckOutlined, 
         NumberOutlined, 
         ThunderboltOutlined,
         BookOutlined
         } from '@ant-design/icons';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import LineChart from './LineChart'
import Loader from './loader'
import BookmarkService from '../services/bookmarkService'



const { Title, Text } = Typography
const { Option } = Select


const CryptoDetailes = ({update}) => {
  const { coinId } = useParams()
  const [timeperiod, setTimePeriod] = useState('7d')
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timeperiod})
  const cryptoDetails = data?.data?.coin
  console.log('cryptoDetails', cryptoDetails)

  const [ bookmarked, setBookmarked ] = useState(BookmarkService.validateBookMark(coinId));
  const [ style, setStyle ] = useState("not-bookmarked");
  

  useEffect(() => {
    setBookmarked(BookmarkService.validateBookMark(coinId));
    if(bookmarked){
      setStyle("bookmarked");
    } else { 
      setStyle("not-bookmarked")
    }
  }, [bookmarked, coinId]);
  
  //console.log(bookmarked);
  if(isFetching) return <Loader/>

  const time = ['3h', '24h', '7d', '30d','3m','1y', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Approved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  
  const propagateBookmark = () => {
    console.log("Bookmark button clicked.");

    const set = BookmarkService.setBookmark(coinId);
    setBookmarked(set);
    //set ? setStyle("bookmarked") : setStyle("not-bookmarked");
    return BookmarkService.coinArray();
  }

  if (isFetching) return 'Loading...'

  return (
    <>
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <div className="details-bookmark-button">
          <div className="crypto-title">
            <Title level={2} className="coin-name">
              {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
            </Title>
          </div>
          <div className="bookmark-button">
            <Button className={style} icon={<BookOutlined />} onClick={() => update(propagateBookmark)}></Button>
          </div>
          <div className="crypto-details">
            <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
          </div>
        </div>
      </Col>
      <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
        {time.map((date) => <Option key={date}>{date}</Option>)}
      </Select>
        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />  
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading coin-heading-animation">{cryptoDetails.name} Value Statistics</Title>
            <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={"stats-"+title}>
              <Col className="coin-stats-name" key={"stats-name-"+title}>
                <Text className="coin-stats-name-data" key={"stats-name-data-"+title}>{icon}</Text>
                <Text className="coin-stats-name-data" key={"stats-name-date-"+title}>{title}</Text>
              </Col>
              <Text className="stats" key={value}>{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading coin-heading-animation">Other Stats Info</Title>
            <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={"stats-"+title}>
              <Col className="coin-stats-name" key={"stats-name-"+title}>
                <Text className="coin-stats-name-data" key={"stats-name-data-"+title}>{icon}</Text>
                <Text className="coin-stats-name-data" key={"stats-name-date-"+title}>{title}</Text>
              </Col>
              <Text className="stats" key={value}>{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading coin-heading-animation">What is {cryptoDetails.name}?</Title>
          <p id="coin-details-description">{HTMLReactParser(cryptoDetails.description)}</p>
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading coin-heading-animation">{cryptoDetails.name} Links</Title>
          {cryptoDetails.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <div class="coin-link-rows">
                <Title level={5} className="link-name">{link.type}</Title>
                <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
              </div>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  </>
  )
}

export default CryptoDetailes
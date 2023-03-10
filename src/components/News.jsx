import React,{useState} from 'react'
import { Select,Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment/moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './loader'
const { Text, Title } = Typography
const { Option } = Select
const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({simplified}) => {

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if(!cryptoNews?.value) return <Loader />
  return (
    <>
      <Row gutter={[8, 16]} className="news-card-container">
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency" key="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name} key={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} lg={12} xl={8} xxl={6} key={i}>
            <div className="news-grid">
              <div className="news-card-grid">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <Card
                    title={
                      <div className="news-image-container"  >
                      <Title className="news-title" level={4}>{news.name.length>75?news.name.substr(0,75)+"...":news.name}</Title>
                      <img style={{maxWidth: '80px' , maxHeight: '80px', marginLeft: '0.5rem'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                    </div>
                    }
                    hoverable 
                    className="news-card">
                    <p>
                      {news.description.length > 100 
                      ? `${news.description.substring(0, 100)}...` 
                      : news.description}
                    </p>
                    <div className="provider-container">
                      <div>
                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" size={20} />
                          <Text className="provider-name">{news.provider[0]?.name}</Text>
                      </div>
                        <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                    </div>
                  </Card>
                </a>
              </div>
              <div className="news-bg"></div>
            </div>
          </Col>
        ))}
      </Row>
        
    </>
  )
}

export default News
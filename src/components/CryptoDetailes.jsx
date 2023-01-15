import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import { Typography, Row, Col, Statistic,Select } from 'antd'
import { MoneyCollectOutlined, 
         DollarCircleOutlined,
         FundOutlined, 
         ExclamationCircleOutlined, 
         StopOutlined, 
         TrophyOutlined, 
         CheckOutlined, 
         NumberOutlined, 
         ThunderboltOutlined
         } from '@ant-design/icons';
 import { useGetCryptoDetailsQuery } from '../services/cryptoApi'





const { Title, Text } = Typography
const { Option } = Select

const CryptoDetailes = () => {
    const { coinId } = useParams()
    const {timePeriod, setTimePeriod} = useState('7d')
    console.log(coinId)
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
    return (
        <div>
            <Col className="coin-detailes-container">
                <Col className="coin-heading-container">
                    <Title level={2} className="coin-name">
                        {coinId}
                    </Title>
                    <p>
                        {coinId} is a coin
                    </p>
                </Col>
            </Col>
        </div>
    )
}

export default CryptoDetailes
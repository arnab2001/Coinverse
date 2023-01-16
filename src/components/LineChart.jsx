// import React from 'react'
// import { Line } from 'react-chartjs-2'
// import { Typography, Row, Col, Select } from 'antd'
// import { useGetCryptoHistoryQuery } from '../services/cryptoApi'


// const { Title } = Typography
// const LineChart = ({ coinHistory, currentPrice, coinName }) => {
//     const coinprice = []
//     const coinTimestamp = []

//     for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
//         coinprice.push(coinHistory?.data?.history[i].price)
//         coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
//     } 

//     const data = {
//         labels: coinTimestamp,
//         datasets: [
//             {
//                 label: 'Price In USD',
//                 data: coinprice,
//                 fill: false,
//                 backgroundColor: '#0071bd',
//                 borderColor: '#0071bd',
//             },
//         ],
//     }

//     const options = {
//         scales: {
//             yAxis: [
//                 {
//                     ticks: {
//                         beginAtZero: true,
//                     },
//                 },
//             ],
//         },
//     }



//   return (
//     <>
//         <Row className="chart-header">
//             <Title level={2} className="chart-title">{coinName} Price Chart</Title>
//             <Col className="price-container">
//                 <Title level={5} className="price-change">Change:{coinHistory?.data?.change}%</Title>
//                 <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
//             </Col>
//         </Row>
//         <Line data={data} options={options}  />
//     </>
//   )
// }

// export default LineChart


import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

    const data = {  
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };





  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />

    </>
  );
};

export default LineChart;
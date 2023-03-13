//Do not touch backupnews

// import React, { useEffect, useState } from "react";
// import { Select, Typography, Row, Col, Avatar, Card } from "antd";
// import moment from "moment";
// import Loader from './loader'
// import axios from "axios";
// // const axios = require("axios");

// const { Text, Title } = Typography;
// // const { Option } = Select;
// const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

// const BackupNews = ({simplified}) => {

//     const type= simplified ? 'crypto%20top20' : 'crypto%20market' ;

//     const [articles, setArticles] = useState([])

//     useEffect(() => {
//         const getArticles = async() =>{
//             const response= await axios.get(`https://newsapi.org/v2/everything?q=${type}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`)
//             console.log(response)
//             setArticles(response.data.articles)
//         }
//         getArticles()
//     }, [type])

//     // const options = {
//     //     method: 'GET',
//     //     url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
//     //     headers: {
//     //       'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
//     //       'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST
//     //     }
//     //   };
      
//     //   axios.request(options).then(function (response) {
//     //       console.log(response.data);
//     //   }).catch(function (error) {
//     //       console.error(error);
//     //   });

//     // const { data: cryptoBackupNews } = useGetCryptoBackupNewsQuery({ count: simplified ? 5 : 10 })
//     // console.log(cryptoBackupNews);

//     if(!articles) return <Loader />
//     return(
//         <Row gutter={[ 24,24 ]}>
//             {articles.map((article, i) => (
//                 <Col xs={24} sm={12} lg={12} key={i}>
//                     <Card hoverable className="backupnews-card">
//                         <a href={article.url} target="_blank" rel="noreferrer">
//                             <div className="backupnews-image-container">
//                                 <Title className="backupnews-title" level={4}>{article.title}</Title>
//                                 <img style={{maxWidth: '200px' , maxHeight: '100px'}} src={article.urlToImage || demoImage} alt="news"/>
//                             </div>
//                             <p style={{color: 'black !important'}}>
//                     {article.content.length > 100 
//                     ? `${article.content.substring(0, 100)}...` 
//                     : article.content}
//                   </p>
//                   <div className="provider-container">
//                   <div>
//                        <Avatar src={ demoImage } alt="news" size={20} />
//                         <Text className="provider-name">{article.author}</Text>
//                     </div>
//                   <Text>{moment(article.datePublished).startOf('ss').fromNow()}</Text>
//                   </div>
//                         </a>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     )
// }

// export default BackupNews ;
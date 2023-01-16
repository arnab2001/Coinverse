// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '09d4d4a6femsh02362d9347f3279p17143djsn3ccbe78c9c88',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
  

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    
    
    'X-RapidAPI-Host':  process.env.REACT_APP_RAPIDAPI_HOST
}
console.log(process.env.REACT_APP_RAPIDAPI_KEY);
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoApiHeaders }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`)
            // createRequest(`coin/${coinId}/history?timeperiod=7d`)
        })

    })

})

export const { 
    useGetCryptosQuery ,
    useGetCryptoDetailsQuery , 
    useGetCryptoHistoryQuery 
     } = cryptoApi;

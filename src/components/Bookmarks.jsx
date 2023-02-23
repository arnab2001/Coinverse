import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import BookmarkService from '../services/bookmarkService';
import { BookOutlined, LineOutlined } from '@ant-design/icons';
import SubMenu from 'antd/es/menu/SubMenu';
import Loader from './loader';


const Bookmarks = ({sendCoins}) => {
    const [ bookmarks, setBookmarks ] = useState(BookmarkService.coinArray());
    const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
    const [cryptos, setCryptos] = useState('') //this is the state

    useEffect(() => {
        if(bookmarks !== sendCoins) {
            setBookmarks(sendCoins)
        }
        const filteredData = cryptosList?.data?.coins.filter((item) => bookmarks.indexOf(item.uuid) !== -1);
    
        setCryptos(filteredData);

      }, [sendCoins, bookmarks, cryptosList]);

    if(isFetching) return <Loader/>

    if(bookmarks.length !== 0) return (
        <>
        <SubMenu 
            key="bookmarks" 
            title={
              <span>
                <BookOutlined />
                <span>Bookmarks</span>
              </span>
            }
        >
            {cryptos?.map((currency) => (
                <Menu.Item key={"/crypto/"+currency.uuid} icon={<LineOutlined/>}>
                    <Link to={`/crypto/${currency.uuid}`}>
                        <div className="bookmark-details">
                            {currency.symbol}
                            <img className="bookmark-image" alt={currency.name} src={currency.iconUrl}/>
                        </div>
                    </Link>
                </Menu.Item>
            ))}
        </SubMenu>  
        </>
    )
}

export default Bookmarks;
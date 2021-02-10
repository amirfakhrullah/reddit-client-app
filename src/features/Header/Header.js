import React from 'react';
import './Header.css';
import { useState } from 'react';
import RedditCall from '../../app/reddit';
import { useDispatch } from 'react-redux';
import { getSearchResults } from '../RedditPostList/redditPostListSlice';

import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const { subHead } = useSelector(state => state.subredditPage);
    const dispatch = useDispatch();
    const [searchItem, setSearchItem] = useState('');

    const onKeyPress = (e) => {
        e.preventDefault();
        RedditCall.fetchSearchResults(searchItem).then(results => {
            dispatch(getSearchResults(results));
        });
        setSearchItem('');
    }

    const onChange = (e) => {
        setSearchItem(e.target.value);
    }

    return (
        <div className="header">
            <div className="header__left">
                <div className="reddit-logo">
                    <img src="./reddit.png" />
                </div>
                <div className="searchbar">
                    <SearchIcon />
                    <input type="text" placeholder="search..." onChange={onChange} value={searchItem} onKeyPress={onKeyPress} />
                </div>
            </div>

            <Route exact path="/">
                <div className="header__middle">
                    <div className="header__option active" onClick={() => {
                        window.location.href = `/${subHead.display_name_prefixed}/hot`
                    }}>
                        <WhatshotIcon />
                        <p className="header-nav-title">Hot</p>
                    </div>
                    <div className="header__option" onClick={() => {
                        window.location.href = `/${subHead.display_name_prefixed}/latest`
                    }}>
                        <FiberNewIcon />
                        <p className="header-nav-title">Latest</p>
                    </div>
                    <div className="header__option" onClick={() => {
                        window.location.href = `/${subHead.display_name_prefixed}/rising`
                    }}>
                        <BarChartIcon />
                        <p className="header-nav-title">Rising</p>
                    </div>
                </div>
            </Route>

            <div className="header__right">
                <MenuIcon />
            </div>
        </div>
    )
}

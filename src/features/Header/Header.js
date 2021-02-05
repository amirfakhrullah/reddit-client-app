import React from 'react';
import './Header.css';
import { useState, useEffect } from 'react';
import RedditCall from '../../app/reddit';

import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const [searchItem, setSearchItem] = useState([]);

    const onKeyPress = (e) => {
        e.preventDefault();
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

            <div className="header__middle">
                <div className="header__option active" onClick={() => {
                    window.location.href='/hot'
                }}>
                    <WhatshotIcon />
                    <p className="header-nav-title">Hot</p>
                </div>
                <div className="header__option" onClick={() => {
                    window.location.href='/latest'
                }}>
                    <FiberNewIcon />
                    <p className="header-nav-title">Latest</p>
                </div>
                <div className="header__option" onClick={() => {
                    window.location.href='/top'
                }}>
                    <BarChartIcon />
                    <p className="header-nav-title">Top</p>
                </div>
            </div>

            <div className="header__right">
                <MenuIcon />
            </div>
        </div>
    )
}

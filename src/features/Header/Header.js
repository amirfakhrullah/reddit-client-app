import React from 'react';
import './Header.css';
import { useState } from 'react';

import { Route, withRouter } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import BarChartIcon from '@material-ui/icons/BarChart';
import GitHubIcon from '@material-ui/icons/GitHub';

function Header(props) {
    const [searchItem, setSearchItem] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            props.onSearch(searchItem);
            setSearchItem('');
            props.history.push(`/results/`);
        };
    }

    const handleTextChange = (e) => {
        setSearchItem(e.target.value);
    }

    return (
        <div className="header">
            <div className="header__left">
                <div className="reddit-logo" onClick={() => window.location.href = '/'}>
                    <img src="./reddit.png" alt="reddit-icon" />
                </div>
                <div className="searchbar">
                    <SearchIcon />
                    <input type="text" id="search" placeholder="search..." onChange={handleTextChange} value={searchItem} onKeyPress={handleKeyPress} />
                </div>
            </div>

            <Route exact path={["/", "/popular", "/controversial", "/hot", "/latest", "/rising"]}>
                <div className="header__middle">
                    <div className="header__option" id="active" onClick={() => {
                        window.location.href = "/hot"
                    }}>
                        <WhatshotIcon />
                        <p className="header-nav-title">Hot</p>
                    </div>
                    <div className="header__option" onClick={() => {
                        window.location.href = "/latest"
                    }}>
                        <FiberNewIcon />
                        <p className="header-nav-title">Latest</p>
                    </div>
                    <div className="header__option" onClick={() => {
                        window.location.href = "/rising"
                    }}>
                        <BarChartIcon />
                        <p className="header-nav-title">Rising</p>
                    </div>
                </div>
            </Route>

            <div className="header__right" onClick={() => window.open('https://github.com/amirfakhrullah', '_blank')}>
                <GitHubIcon />
            </div>
        </div>
    )
}

export default withRouter(Header);

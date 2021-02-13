import React from 'react';
import './SideBar.css';
import SubredditBox from '../SubredditBox/SubredditBox';

import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ForumIcon from '@material-ui/icons/Forum';


export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__option" onClick={() => {
                window.location.href = '/';
            }}>
                <HomeIcon />
                <p className="sidebar__option__p">Home</p>
            </div>
            <div className="sidebar__option" onClick={() => {
                window.location.href = '/popular';
            }}>
                <TrendingUpIcon />
                <p className="sidebar__option__p">Popular</p>
            </div>
            <div className="sidebar__option" onClick={() => {
                window.location.href = '/controversial';
            }}>
                <ForumIcon />
                <p className="sidebar__option__p">Controversial</p>
            </div>

            <div className="sidebar__subreddit">
                <h3 className="subreddit__header">Subreddits</h3>
                <SubredditBox />
            </div>
        </div>
    )
}

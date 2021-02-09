import React from 'react';
import './SideBar.css';
import SubredditBox from '../SubredditBox/SubredditBox';

import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ForumIcon from '@material-ui/icons/Forum';

import { Route } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sidebar">
            <Route exact path={["/", "/popular", "/controversial", "/hot", "/latest", "/top"]}>
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
            </Route>

            <div className="sidebar__subreddit">
                <h3 className="subreddit__header">Subreddits</h3>
                <SubredditBox />
            </div>
        </div>
    )
}

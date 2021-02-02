import React from 'react';
import './RightSideBar.css';

import SubredditBox from '../SubredditBox/SubredditBox';

export default function RightSideBar() {
    return (
        <div className="rightsidebar-container">
            <div className="rightsidebar">
                <h3 className="subreddit__header">Subreddits for Programmers</h3>
                <SubredditBox />
            </div>
            <div className="rightsidebar">
                <h3 className="subreddit__header">Subreddits for Programmers</h3>
                <SubredditBox />
            </div>
        </div>
    )
}

import React from 'react';
import './RedditPostList.css';
import RedditPost from '../RedditPost/RedditPost';

function RedditPostList() {
    return (
        <div className="redditpostlist">
            <RedditPost />
            <RedditPost />
            <RedditPost />
            <RedditPost />
            <RedditPost />
            <RedditPost />
            <RedditPost />
            <RedditPost />
        </div>
    );
}

export default RedditPostList;

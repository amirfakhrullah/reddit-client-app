import React from 'react';
import './RedditPostList.css';
import RedditPost from '../../features/RedditPost/RedditPost';

export default function RedditPostList() {
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

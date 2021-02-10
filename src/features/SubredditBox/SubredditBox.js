import React from 'react';
import './SubredditBox.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RedditCall from '../../app/reddit';
import { getTrendingSubreddits } from './subredditsSlice';
import { getSubredditHead, getSubredditPosts, getSubredditPostsHot, getSubredditPostsRising, getSubredditPostsNew } from '../RedditPostList/subredditPageSlice';


export default function SubredditBox() {
    const dispatch = useDispatch();

    useEffect(() => {
        RedditCall.fetchTrendingSubreddits().then(results => {
            dispatch(getTrendingSubreddits(results));
        })
    }, []);

    var subredditList = useSelector(state => state.subreddits);
    subredditList = subredditList.slice(0, 10);

    return (
        <div className="subreddit-boxes">
            {
                subredditList && subredditList.map(sub => (
                    <div className="subreddit-box" onClick={(RedditCall, sub) => {
                        RedditCall.fetchSubredditAbout(sub.data.display_name_prefixed).then(results => {
                            dispatch(getSubredditHead(results))
                        });
                        RedditCall.fetchSubredditPosts(sub.data.display_name_prefixed).then(results2 => {
                            dispatch(getSubredditPosts(results2))
                        });
                        RedditCall.fetchSubredditPostsHot(sub.data.display_name_prefixed).then(results => {
                            dispatch(getSubredditPostsHot(results))
                        });
                        RedditCall.fetchSubredditPostsRising(sub.data.display_name_prefixed).then(results => {
                            dispatch(getSubredditPostsRising(results))
                        });
                        RedditCall.fetchSubredditPostsNew(sub.data.display_name_prefixed).then(results => {
                            dispatch(getSubredditPostsNew(results))
                        });
                        window.location.href = `/${sub.data.display_name_prefixed}`
                    }}>
                        <div className="subreddit__image">
                            <img src={sub.data.icon_img} />
                        </div>
                        <div className="subreddit__details">
                            <h3 className="subreddit">{sub.data.display_name_prefixed}</h3>
                            <p>{(sub.data.subscribers > 1000 && sub.data.subscribers < 1000000) ? (sub.data.subscribers / 1000).toFixed(1) + 'k' : (sub.data.subscribers / 1000000).toFixed(1) + 'M'} Members</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

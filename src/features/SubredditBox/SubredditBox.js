import React from 'react';
import './SubredditBox.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RedditCall from '../../app/reddit';
import { getTrendingSubreddits } from './subredditsSlice';


export default function SubredditBox() {
    const dispatch = useDispatch();

    useEffect(() => {
        RedditCall.fetchTrendingSubreddits().then(results => {
            dispatch(getTrendingSubreddits(results));
        })
    }, []);

    var subredditList = useSelector(state =>state.subreddits);
    subredditList = subredditList.slice(0, 10);

    return (
        <div className="subreddit-boxes">
            {
                subredditList && subredditList.map(sub => (
                    <div className="subreddit-box" onClick={() => {
                        window.location.href=sub.data.url}}>
                 <div className="subreddit__image">
                     <img src={sub.data.icon_img} />
                 </div>
                 <div className="subreddit__details">
                     <h3 className="subreddit">{sub.data.display_name_prefixed}</h3>
                     <p>{sub.data.subscribers} subscribers</p>
                 </div>
             </div>
                ))
            }
        </div>
    );
}

import React from 'react';
import './SubredditBox.css';

import { Link } from 'react-router-dom';

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

    var subredditList = useSelector(state => state.subreddits);
    subredditList = subredditList.slice(0, 10);

    return (
        <div className="subreddit-boxes">
            {
                subredditList && subredditList.map(sub => (
                    <Link to={`/${sub.data.display_name_prefixed}`} key={sub.data.id} >
                        <div className="subreddit-box" onClick={() => {
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
                    </Link>
                ))
            }
            <div className="allsubreddit__nav" onClick={() => window.location.href='/subreddits'}>
                <h3 className="all__nav full__icon__all"> See all Subreddits</h3>
                <h3 className="all__nav half__icon__all"> See all</h3>
                <h3 className="all__nav small__icon__all">&gt;</h3>
            </div>
        </div>
    );
}

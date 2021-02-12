import React from 'react';
import './AllSubredditsPage.css';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import RedditCall from '../../app/reddit';
import { getTrendingSubreddits } from '../SubredditBox/subredditsSlice';

import { connect } from 'react-redux';

function AllSubredditsPage(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.allSubreddits === []) {
            RedditCall.fetchTrendingSubreddits().then(results => {
                dispatch(getTrendingSubreddits(results));
            })
        }
    }, []);

    const roundOffNum = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(2) + 'k';
        } else {
            return num;
        }
    };


    return (
        <div className="all__subreddits__whole">
            <h1>All Subreddits:</h1>
            <div className="all__subreddits__page__main">
                <div className="subreddits__container">
                    {
                        props.allSubreddits && props.allSubreddits.map(group => (
                            <div className="subreddit__box" onClick={() => window.location.href=`/${group.data.display_name_prefixed}`}>
                                <div className="subreddit__box__top" style={{
                                    backgroundImage: `url(${group.data.banner_img})`,
                                    backgroundPosition: `center`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundSize: `cover`
                                }}>
                                    <div className="subreddit__box__image">
                                        {
                                            group.data.icon_img ? (<img src={group.data.icon_img} />) : (<div className="subreddit__box__image__substitute"></div>)
                                        }
                                    </div>
                                </div>
                                <div className="subreddit__box__middle">
                                    <h3>{group.data.display_name}</h3>
                                    <span>{group.data.display_name_prefixed}</span>
                                </div>
                                <div className="subreddit__box__bottom">
                                    <p>{roundOffNum(group.data.subscribers)} Members</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default connect((state => {
    const { subreddits } = state
    return {
        allSubreddits: subreddits
    }
}))(AllSubredditsPage);
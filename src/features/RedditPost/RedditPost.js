import React from 'react';
import './RedditPost.css';
import { useState, useEffect } from 'react';
import RedditCall from '../../app/reddit';
import { Link } from 'react-router-dom';

import AbortController from "abort-controller"

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import MoreIcon from '@material-ui/icons/More';

export default function RedditPost(props) {
    const [subredditIcon, setSubredditIcon] = useState('');
    const subredditName = props.post.data.subreddit_name_prefixed;

    const controller = new AbortController()

    useEffect(() => {
        RedditCall.fetchSubredditAbout(subredditName).then(results => {
            setSubredditIcon(results.icon_img)
        });
        return () => controller.abort();
    }, []);

    var unixTimestamp = props.post.data.created_utc;
    var dat = new Date(unixTimestamp * 1000);
    var hours = dat.getHours();
    var realTime = hours + ' hours';


    return (
        <div className="redditpost">
            <div className="redditpost__top">
                <Link to={`/${props.post.data.subreddit_name_prefixed}`} key={props.post.data.id} >
                    <div className="redditpost-subreddit-image">
                        <img src={subredditIcon} />
                    </div>
                </Link>
                <p className="redditpost-sub" onClick={() => {
                    window.location.href = `/${props.post.data.subreddit_name_prefixed}`;
                }}>{props.post.data.subreddit_name_prefixed}</p>
                <p className="redditpost-by">Posted by u/{props.post.data.author}</p>
                <p className="redditpost-time">{realTime} ago</p>
            </div>
            <div className="redditpost__middle">
                <h3 className="redditpost-post">{props.post.data.title}</h3>
                {props.post.data.url_overridden_by_dest && (
                    <div className="redditpost-post-image" onError={(e) => e.target.style.display = "none"}>
                        <img src={props.post.data.url_overridden_by_dest} />
                    </div>
                )}
            </div>
            <div className="redditpost__bottom">
                <div className="redditpost-total-likes">
                    <ArrowUpwardIcon />
                    <p className="redditpost-likes">{props.post.data.score > 1000 ? (props.post.data.score / 1000).toFixed(1) + 'k' : props.post.data.score}</p>
                    <ArrowDownwardIcon />
                </div>
                <div className="redditpost-total-comments">
                    <ModeCommentIcon />
                    <p className="redditpost-comment">{props.post.data.num_comments > 1000 ? (props.post.data.num_comments / 1000).toFixed(1) + 'k' : props.post.data.num_comments}</p>
                </div>
                <div className="redditpost-total-details">
                    <MoreIcon />
                    <p className="redditpost-details">Details</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import './RedditPost.css';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import MoreIcon from '@material-ui/icons/More';

export default function RedditPost() {
    return (
        <div className="redditpost">
            <div className="redditpost__top">
                <div className="redditpost-subreddit-image">
                    <img src="" />
                </div>
                <p className="redditpost-sub">r/wallstreetbets</p>
                <p className="redditpost-by">Posted by adfwda</p>
                <p className="redditpost-time">3 hours ago</p>
            </div>
            <div className="redditpost__middle">
                <h3 className="redditpost-post">Russia may fine citizens for using SpaceX's Starlink internet. Here's how Elon Musk's service poses a threat to authoritarian regimes.</h3>
                <div className="redditpost-post-image">
                    <img src="" />
                </div>
            </div>
            <div className="redditpost__bottom">
                <div className="redditpost-total-likes">
                    <ArrowUpwardIcon />
                    <p className="redditpost-likes">15k</p>
                    <ArrowDownwardIcon />
                </div>
                <div className="redditpost-total-comments">
                    <ModeCommentIcon />
                    <p className="redditpost-comment">2.3k</p>
                </div>
                <div className="redditpost-total-details">
                    <MoreIcon />
                    <p className="redditpost-details">Details</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import './SinglePost.css';

import RedditCall from '../../app/reddit';
import { useEffect, useState } from 'react';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

import AbortController from "abort-controller"

export default function SinglePost({ match }) {
    const [postContent, setPostContent] = useState({});
    const [postComments, setPostComments] = useState([]);
    const [subredditIcon, setSubredditIcon] = useState('');


    useEffect(() => {
        const controller = new AbortController()
        RedditCall.fetchSinglePost('r/' + match.params.subredditId, match.params.commentId).then(results => {
            setPostContent(results);
        });
        RedditCall.fetchSinglePostComments('r/' + match.params.subredditId, match.params.commentId).then(results => {
            setPostComments(results);
        });
        RedditCall.fetchSubredditAbout('r/' + match.params.subredditId).then(results => {
            setSubredditIcon(results.icon_img)
        });
        return () => controller.abort();
    }, [match.params]);

    const roundOff = num => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        } else {
            return num;
        }
    }

    const roundTime = t => {
        var unixTimestamp = t;
        var data = new Date(unixTimestamp * 1000);
        var hours = data.getHours();
        if (hours >= 24) {
            return data.getDay() + ' days';
        } else if (hours >= 1) {
            return hours + ' hours';
        } else {
            return data.getMinutes() + ' minutes';
        }
    };

    if (postContent) {
        return (
            <div className="singlePost">
                <div className="post">
                    <div className="post__top">
                        <div className="post-subreddit-image" onClick={() => window.location.href = `/${postContent.subreddit_name_prefixed}`}>
                            {
                                subredditIcon ? (<img src={subredditIcon} alt="subreddit-icon" />) : (<div className="post-subreddit-image___substitute"></div>)
                            }
                        </div>
                        <p className="post-sub" onClick={() => {
                            window.location.href = `/${postContent.subreddit_name_prefixed}`;
                        }}>{postContent.subreddit_name_prefixed}</p>
                        <p className="post-by">Posted by u/{postContent.author}</p>
                        <p className="post-time">{roundTime(postContent.created_utc)} ago</p>
                    </div>
                    <div className="post__middle">
                        <h3 className="post-post">{postContent.title}</h3>
                        {postContent.url_overridden_by_dest && (
                            <div className="post-post-image" onError={(e) => e.target.style.display = "none"}>
                                <a href={postContent.url_overridden_by_dest} target="_blank" rel="noreferrer" >
                                    <img src={postContent.url_overridden_by_dest} alt="media" />
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="post__bottom">
                        <div className="post-total-likes">
                            <ArrowUpwardIcon />
                            <p className="post-likes">{roundOff(postContent.score)}</p>
                            <ArrowDownwardIcon />
                        </div>
                        <div className="post-total-comments nothover">
                            <ModeCommentIcon />
                            <p className="post-comment">{roundOff(postContent.num_comments)}</p>
                        </div>
                    </div>
                </div>

                <div className="comments-container">
                    <h3 className="comments-title">Comments:</h3>

                    {postComments && postComments.map(comment => (
                        <div className="comment" key={comment.data.id}>
                            <div className="comment__left">
                                <div className="comment__top">
                                    <p className="comment-by">{comment.data.author} <span>u/{comment.data.author}</span></p>
                                    <p className="comment-time">{roundTime(comment.data.created_utc)} ago</p>
                                </div>
                                <div className="comment__middle">
                                    <p>{comment.data.body}</p>
                                </div>
                            </div>
                            <div className="comment__right">
                                <ArrowUpwardIcon />
                                <p className="post-likes">{comment.data.score}</p>
                                <ArrowDownwardIcon />
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )
    };
    return (
        <h1 className="post__error">Error</h1>
    );
}

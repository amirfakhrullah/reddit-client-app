import React from 'react';
import './RedditPostList.css';
import RedditPost from '../RedditPost/RedditPost';

function RedditPostList(props) {
    return (
        <div className="redditpostlist">
            {
                props.posts && props.posts.map(data => (
                    <RedditPost post={data} />
                ))
            }
        </div>
    );
}

export default RedditPostList;

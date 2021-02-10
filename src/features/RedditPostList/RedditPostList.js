import React from 'react';
import './RedditPostList.css';
import RedditPost from '../RedditPost/RedditPost';

import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuIcon from '@material-ui/icons/Menu';

function RedditPostList(props) {
    return (
        <div className="redditpostlist">
            {
                props.subreddit && (
                    <div className="subredditHead">
                        <div className="subredditHead__top" style={{
                            backgroundImage: `url(${props.subreddit.banner_img})`,
                            backgroundPosition: `center`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: `cover`
                        }}>
                            <div className="subredditHeadImage">
                                <img src={props.subreddit.icon_img} />
                            </div>
                        </div>
                        <div className="subredditHead__middle">
                            <h1>{props.subreddit.display_name_prefixed}</h1>
                            <h3>{props.subreddit.public_description}</h3>
                            <p>{props.subreddit.subscribers} Members</p>
                            <p>{props.subreddit.accounts_active} Active Members</p>
                        </div>
                        <div className="subredditHead__bottom">
                            <div className="subredditNav active" onClick={() => {
                                window.location.href = `/${props.subreddit.display_name_prefixed}/hot`
                            }}>
                                <WhatshotIcon />
                                <p className="">Hot</p>
                            </div>
                            <div className="subredditNav" onClick={() => {
                                window.location.href = `/${props.subreddit.display_name_prefixed}/latest`
                            }}>
                                <FiberNewIcon />
                                <p className="">Latest</p>
                            </div>
                            <div className="subredditNav" onClick={() => {
                                window.location.href = `/${props.subreddit.display_name_prefixed}/rising`
                            }}>
                                <BarChartIcon />
                                <p className="">Rising</p>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                props.posts && props.posts.map(data => (
                    <RedditPost post={data} />
                ))
            }
        </div>
    );
}

export default RedditPostList;

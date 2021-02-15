import React from 'react';
import './SubredditPage.css';
import { useEffect, useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import AbortController from "abort-controller"

import RedditCall from '../../app/reddit';
import RedditPostList from '../RedditPostList/RedditPostList';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import BarChartIcon from '@material-ui/icons/BarChart';


export default function SubredditPage({ match }) {
    const [subredditAbout, setSubredditAbout] = useState({});
    const [subredditPosts, setSubredditPosts] = useState([]);
    const [subredditPostsHot, setSubredditPostsHot] = useState([]);
    const [subredditPostsNew, setSubredditPostsNew] = useState([]);
    const [subredditPostsRising, setSubredditPostsRising] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        RedditCall.fetchSubredditAbout(`r/${match.params.id}`).then(results => {
            setSubredditAbout(results);
        });
        RedditCall.fetchSubredditPosts(`r/${match.params.id}`).then(results => {
            setSubredditPosts(results)
        });
        RedditCall.fetchSubredditPostsHot(`r/${match.params.id}`).then(results => {
            setSubredditPostsHot(results)
        });
        RedditCall.fetchSubredditPostsRising(`r/${match.params.id}`).then(results => {
            setSubredditPostsRising(results)
        });
        RedditCall.fetchSubredditPostsNew(`r/${match.params.id}`).then(results => {
            setSubredditPostsNew(results)
        });
        return controller.abort();
    }, [match.params.id]);

    return (
        <div className="subreddit__main">
            <div className="subredditHead">
                <div className="subredditHead__top" style={{
                    backgroundImage: `url(${subredditAbout.banner_img})`,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`
                }}>
                    <div className="subredditHeadImage">
                        {
                            subredditAbout.icon_img ? (<img src={subredditAbout.icon_img} alt="" />) : (<div className="subredditHeadImage___substitute"></div>)
                        }
                    </div>
                </div>
                <div className="subredditHead__middle">
                    <h1>{subredditAbout.display_name_prefixed}</h1>
                    <h3>{subredditAbout.public_description}</h3>
                    <p>{subredditAbout.subscribers} Members</p>
                    <p>{subredditAbout.accounts_active} Active Members</p>
                </div>
                <div className="subredditHead__bottom">
                    <div className="subredditNav active" onClick={() => {
                        window.location.href = `/${subredditAbout.display_name_prefixed}/hot`
                    }}>
                        <WhatshotIcon />
                        <p className="">Hot</p>
                    </div>
                    <div className="subredditNav" onClick={() => {
                        window.location.href = `/${subredditAbout.display_name_prefixed}/latest`
                    }}>
                        <FiberNewIcon />
                        <p className="">Latest</p>
                    </div>
                    <div className="subredditNav" onClick={() => {
                        window.location.href = `/${subredditAbout.display_name_prefixed}/rising`
                    }}>
                        <BarChartIcon />
                        <p className="">Rising</p>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path={`/${subredditAbout.display_name_prefixed}`}>
                    <RedditPostList posts={subredditPosts} />
                </Route>
                <Route exact path={`/${subredditAbout.display_name_prefixed}/hot`}>
                    <RedditPostList posts={subredditPostsHot} />
                </Route>
                <Route exact path={`/${subredditAbout.display_name_prefixed}/latest`}>
                    <RedditPostList posts={subredditPostsNew} />
                </Route>
                <Route exact path={`/${subredditAbout.display_name_prefixed}/rising`}>
                    <RedditPostList posts={subredditPostsRising} />
                </Route>
            </Switch>
        </div>
    )
}

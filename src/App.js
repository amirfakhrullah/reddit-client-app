import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './features/Header/Header';
import SideBar from './features/SideBar/SideBar';
import RedditPostList from './features/RedditPostList/RedditPostList';
import RightSideBar from './features/RightSideBar/RightSideBar';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RedditCall from './app/reddit';
import { getHomePosts, getHomePostsPopular, getHomePostsControversial } from './features/RedditPostList/redditPostListSlice';
import { getSubredditHead, getSubredditPosts, getSubredditPostsHot, getSubredditPostsRising, getSubredditPostsNew } from './features/RedditPostList/subredditPageSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    RedditCall.fetchHomePosts().then(results => {
      dispatch(getHomePosts(results))
    });
    RedditCall.fetchHomePostsPopular().then(results => {
      dispatch(getHomePostsPopular(results))
    });
    RedditCall.fetchHomePostsControversial().then(results => {
      dispatch(getHomePostsControversial(results))
    });
    RedditCall.fetchSubredditAbout('r/news').then(results => {
      dispatch(getSubredditHead(results))
    });
    RedditCall.fetchSubredditPosts('r/news').then(results => {
      dispatch(getSubredditPosts(results))
    });
    RedditCall.fetchSubredditPostsHot('r/news').then(results => {
      dispatch(getSubredditPostsHot(results))
    });
    RedditCall.fetchSubredditPostsRising('r/news').then(results => {
      dispatch(getSubredditPostsRising(results))
    });
    RedditCall.fetchSubredditPostsNew('r/news').then(results => {
      dispatch(getSubredditPostsNew(results))
    });
  }, []);

  const homePosts = useSelector(state => state.redditPostList.home);
  const homePostsPopular = useSelector(state => state.redditPostList.popular);
  const homePostsControversial = useSelector(state => state.redditPostList.controversial);

  const { subHead, subPosts, subPostsHot, subPostsRising, subPostsNew } = useSelector(state => state.subredditPage);

  return (
    <body>
      <Router>
        <Header />
        <div className="content">
          <SideBar />
          <Switch>
            <Route exact path="/">
              <RedditPostList posts={homePosts} />
            </Route>
            <Route exact path="/popular">
              <RedditPostList posts={homePostsPopular} />
            </Route>
            <Route exact path="/controversial">
              <RedditPostList posts={homePostsControversial} />
            </Route>
            <Route exact path={`/${subHead.display_name_prefixed}`}>
              <RedditPostList posts={subPosts} subreddit={subHead} />
            </Route>
            <Route path={`/${subHead.display_name_prefixed}/hot`}>
              <RedditPostList posts={subPostsHot} subreddit={subHead} />
            </Route>
            <Route path={`/${subHead.display_name_prefixed}/latest`}>
              <RedditPostList posts={subPostsNew} subreddit={subHead} />
            </Route>
            <Route path={`/${subHead.display_name_prefixed}/rising`}>
              <RedditPostList posts={subPostsRising} subreddit={subHead} />
            </Route>
          </Switch>
          <RightSideBar />
        </div>
      </Router>
    </body>
  );
}

export default App;

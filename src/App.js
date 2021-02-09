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
  }, []);

  const homePosts = useSelector(state => state.redditPostList.home);
  const homePostsPopular = useSelector(state => state.redditPostList.popular);
  const homePostsControversial = useSelector(state => state.redditPostList.controversial);
  const { hot, latest, top } = useSelector(state => state.redditPostList);

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
            <Route path="/hot">
              <RedditPostList posts={hot} />
            </Route>
            <Route path="/latest">
              <RedditPostList posts={latest} />
            </Route>
            <Route path="/top">
              <RedditPostList posts={top} />
            </Route>
          </Switch>
          <RightSideBar />
        </div>
      </Router>
    </body>
  );
}

export default App;

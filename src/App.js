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
import { getHomePosts } from './features/RedditPostList/redditPostListSlice';

function App() {
  const dispatch = useDispatch();
    
  useEffect(() => {
    RedditCall.fetchHomePosts().then(results => {
      dispatch(getHomePosts(results))
    });
  }, []);

  const homePosts = useSelector(state => state.redditPostList.home);

  return (
      <body>
        <Router>
          <Header />
          <div className="content">
            <SideBar />
            <Route exact path="/">
              <RedditPostList posts={homePosts} />
            </Route>
            <RightSideBar />
          </div>
        </Router>
      </body>
  );
}

export default App;

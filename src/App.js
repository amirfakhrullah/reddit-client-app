import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Header from './features/Header/Header';
import SideBar from './features/SideBar/SideBar';
import RedditPostList from './features/RedditPostList/RedditPostList';
import RightSideBar from './features/RightSideBar/RightSideBar';

import RedditCall from './app/reddit';
import redditPostsReducer from './reducers/RedditPostsSlice';

function App() {

  return (
    <body>
      <Router>
        <Header />
        <div className="content">
          <SideBar />
          <Route exact path="/">
            <RedditPostList />
          </Route>
          <RightSideBar />
        </div>
      </Router>
    </body>
  );
}

export default App;

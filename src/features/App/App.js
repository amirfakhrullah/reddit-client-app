import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import RedditPostList from '../../features/RedditPostList/RedditPostList';
import RightSideBar from '../../features/RightSideBar/RightSideBar';

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

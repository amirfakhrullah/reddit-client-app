import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AbortController from "abort-controller"

import Header from './features/Header/Header';
import SideBar from './features/SideBar/SideBar';
import RedditPostList from './features/RedditPostList/RedditPostList';
import RightSideBar from './features/RightSideBar/RightSideBar';
import SearchResults from './features/SearchResults/SearchResults';
import SubredditPage from './features/SubredditPage/SubredditPage';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RedditCall from './app/reddit';
import { getHomePosts, getHomePostsPopular, getHomePostsControversial, getSearchResults } from './features/RedditPostList/redditPostListSlice';

function App() {

  const controller = new AbortController()

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
    return controller.abort();
  }, [dispatch]);

  const search = (term) => {
    RedditCall.fetchSearchResults(term).then(results => {
      dispatch(getSearchResults(results));
    })
  };

  const homePosts = useSelector(state => state.redditPostList.home);
  const homePostsPopular = useSelector(state => state.redditPostList.popular);
  const homePostsControversial = useSelector(state => state.redditPostList.controversial);


  return (
    <div>
      <Router>
        <Header onSearch={search} />
        <div className="content">
          <SideBar />
          <Switch>
            <Route exact path={["/", "/latest"]}>
              <RedditPostList posts={homePosts} />
            </Route>
            <Route exact path={["/popular", "/hot"]}>
              <RedditPostList posts={homePostsPopular} />
            </Route>
            <Route exact path={["/controversial", "/rising"]}>
              <RedditPostList posts={homePostsControversial} />
            </Route>
            <Route exact path={"/results/"} component={SearchResults} />
            <Route path="/r/:id" component={SubredditPage} />
          </Switch>
          <RightSideBar />
        </div>
      </Router>
    </div>
  );
}

export default App;

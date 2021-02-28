import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './app/scrollToTop'

import AbortController from "abort-controller"

import Header from './features/Header/Header';
import SideBar from './features/SideBar/SideBar';
import RedditPostList from './features/RedditPostList/RedditPostList';
import RightSideBar from './features/RightSideBar/RightSideBar';
import SearchResults from './features/SearchResults/SearchResults';
import SubredditPage from './features/SubredditPage/SubredditPage';
import AllSubredditsPage from './features/AllSubredditsPage/AllSubredditsPage';
import SinglePost from './features/SinglePost/SinglePost';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RedditCall from './app/reddit';
import { getHomePosts, getHomePostsPopular, getHomePostsControversial, getSearchResults } from './features/RedditPostList/redditPostListSlice';

import { trackPromise } from 'react-promise-tracker';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController()
    trackPromise(
    RedditCall.fetchHomePosts().then(results => {
      dispatch(getHomePosts(results))
    }));
    trackPromise(
    RedditCall.fetchHomePostsPopular().then(results => {
      dispatch(getHomePostsPopular(results))
    }));
    trackPromise(
    RedditCall.fetchHomePostsControversial().then(results => {
      dispatch(getHomePostsControversial(results))
    }));
  return controller.abort();
  }, [dispatch]);

const search = (term) => {
  trackPromise(
  RedditCall.fetchSearchResults(term).then(results => {
    dispatch(getSearchResults(results));
  }))
};

const homePosts = useSelector(state => state.redditPostList.home);
const homePostsPopular = useSelector(state => state.redditPostList.popular);
const homePostsControversial = useSelector(state => state.redditPostList.controversial);

return (
  <div>
    <Router>
      <ScrollToTop>
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
            <Route exact path="/subreddits" component={AllSubredditsPage} />
            <Route path="/post/r/:subredditId/:commentId" component={SinglePost} />
          </Switch>
          <RightSideBar />
        </div>
        <div className="footer-container">
          <div className="footer-description">
            <p>© 2021 Amir Fakhrullah | <a className="apiLink" href="https://www.reddit.com/dev/api/" target="_blank" rel="noreferrer">Reddit API</a></p>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  </div>
);
}

export default App;

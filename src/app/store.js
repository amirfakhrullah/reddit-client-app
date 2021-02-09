import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import redditPostListSlice from '../features/RedditPostList/redditPostListSlice';
import subredditsSlice from '../features/SubredditBox/subredditsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    subreddits: subredditsSlice,
    redditPostList: redditPostListSlice
  },
});
  
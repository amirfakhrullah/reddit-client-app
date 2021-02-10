import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import redditPostListSlice from '../features/RedditPostList/redditPostListSlice';
import subredditsSlice from '../features/SubredditBox/subredditsSlice';
import subredditPageSlice from '../features/RedditPostList/subredditPageSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    subreddits: subredditsSlice,
    redditPostList: redditPostListSlice,
    subredditPage: subredditPageSlice
  },
});
  
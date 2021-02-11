import { configureStore } from '@reduxjs/toolkit';
import redditPostListSlice from '../features/RedditPostList/redditPostListSlice';
import subredditsSlice from '../features/SubredditBox/subredditsSlice';

export default configureStore({
  reducer: {
    subreddits: subredditsSlice,
    redditPostList: redditPostListSlice,
  },
});
  
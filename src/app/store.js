import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import redditPostsSlice from '../reducers/RedditPostsSlice';
import subredditsSlice from '../reducers/SubRedditsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: redditPostsSlice,
    subreddits: subredditsSlice
  },
});

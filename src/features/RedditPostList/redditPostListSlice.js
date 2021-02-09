import { createSlice } from '@reduxjs/toolkit';

const redditPostListSlice = createSlice({
    name: 'redditPostList',
    initialState: {
        home: [],
        popular: [],
        controversial: [],
        hot: [],
        latest: [],
        top: []
    },
    reducers: {
        getHomePosts: (state, action) => {
            state.home = action.payload;
            state.latest = action.payload;
        },
        getHomePostsPopular: (state, action) => {
            state.popular = action.payload;
            state.hot = action.payload;
        },
        getHomePostsControversial: (state, action) => {
            state.controversial = action.payload;
            state.top = action.payload;
        }
    }
})

export const { getHomePosts, getHomePostsPopular, getHomePostsControversial } = redditPostListSlice.actions;

export default redditPostListSlice.reducer;
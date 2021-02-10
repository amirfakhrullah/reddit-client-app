import { createSlice } from '@reduxjs/toolkit';

const redditPostListSlice = createSlice({
    name: 'redditPostList',
    initialState: {
        home: [],
        popular: [],
        controversial: [],
        searchResults: []
    },
    reducers: {
        getHomePosts: (state, action) => {
            state.home = action.payload;
        },
        getHomePostsPopular: (state, action) => {
            state.popular = action.payload;
        },
        getHomePostsControversial: (state, action) => {
            state.controversial = action.payload;
        },
        getSearchResults: (state, action) => {
            state.searchResults = action.payload;
        }
    }
})

export const { getHomePosts, getHomePostsPopular, getHomePostsControversial, getSearchResults } = redditPostListSlice.actions;

export default redditPostListSlice.reducer;
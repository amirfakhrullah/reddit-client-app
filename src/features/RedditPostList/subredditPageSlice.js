import { createSlice } from '@reduxjs/toolkit';

const subredditPageSlice = createSlice({
    name: 'subredditPage',
    initialState: {
        subHead: {},
        subPosts: [],
        subPostsHot: [],
        subPostsRising: [],
        subPostsNew: []
    },
    reducers: {
        getSubredditHead: (state, action) => {
            state.subHead = action.payload
        },
        getSubredditPosts: (state, action) => {
            state.subPosts = action.payload
        },
        getSubredditPostsHot: (state, action) => {
            state.subPostsHot = action.payload
        },
        getSubredditPostsRising: (state, action) => {
            state.subPostsRising = action.payload
        },
        getSubredditPostsNew: (state, action) => {
            state.subPostsNew = action.payload
        }
    }
})

export const { getSubredditHead, getSubredditPosts, getSubredditPostsHot, getSubredditPostsRising, getSubredditPostsNew } = subredditPageSlice.actions;

export default subredditPageSlice.reducer;
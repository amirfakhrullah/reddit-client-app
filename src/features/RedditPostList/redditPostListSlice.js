import { createSlice } from '@reduxjs/toolkit';

const redditPostListSlice = createSlice({
    name: 'redditPostList',
    initialState: {
        home: [],
        popular: [],
        all: [],
        hot: [],
        latest: [],
        top: []
    },
    reducers: {
        getHomePosts: (state, action) => {
            state.home = action.payload
        }
    }
})

export const { getHomePosts } = redditPostListSlice.actions;

export default redditPostListSlice.reducer;
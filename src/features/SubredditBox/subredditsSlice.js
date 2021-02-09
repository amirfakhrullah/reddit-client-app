import { createSlice } from '@reduxjs/toolkit';

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: [],
    reducers: {
        getTrendingSubreddits: (state, action) => state = action.payload
    }
})

export const { getTrendingSubreddits } = subredditsSlice.actions;

export default subredditsSlice.reducer;
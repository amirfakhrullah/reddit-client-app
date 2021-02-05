import { createSlice } from '@reduxjs/toolkit';

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: [],
    reducers: {
        subredditsReducer: (state, action) => state = action.payload
    }
});

export default subredditsSlice.reducer;
export const { subredditsReducer } = subredditsSlice.actions;
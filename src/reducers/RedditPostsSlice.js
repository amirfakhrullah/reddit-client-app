import { createSlice } from '@reduxjs/toolkit';

const redditPostsSlice = createSlice({
    name: "posts",
    initialState: {
        home: [],
        popular: [],
        all: [],
        hot: [],
        latest: [],
        top: []
    },
    reducers: {
        redditPostsReducer: (state, action) => {
            switch (action.types) {
                case "GET_HOME":
                    return {
                        ...state,
                        home: action.payload.home,
                        top: action.payload.top
                    }
                case "GET_POPULAR":
                    return {
                        ...state,
                        popular: action.payload.popular,
                        hot: action.payload.popular
                    }
                case "GET_ALL":
                    return {
                        ...state,
                        all: action.payload.all,
                        latest: action.payload.all
                    }
                case "GET_HOT":
                    return {
                        ...state,
                        all: action.payload.all
                    }
                case "GET_LATEST":
                    return {
                        ...state,
                        latest: action.payload.latest
                    }
                case "GET_TOP":
                    return {
                        ...state,
                        top: action.payload.top
                    }
                default:
                    return {...state}
            }
        }
    }
})

export default redditPostsSlice.reducer;
export const { redditPostsReducer } = redditPostsSlice.actions;
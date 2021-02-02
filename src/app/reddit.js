import React from 'react';

export const API = 'https://www.reddit.com';

const initialOptions = {
    headers: {
        accept: 'application/json',
    },
};

const getTrendingSubreddits = async () => {
    return await fetch(`${API}/r/trendingsubreddits.json`, initialOptions)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(jsonResponse => {
        if(!jsonResponse) {
            return [];
        }
        return jsonResponse.data.children[0];
    })
}

const getHomePosts = async () => {
    return await fetch(`${API}/r/home.json`, initialOptions)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(jsonResponse => {
        if (!jsonResponse) {
            return [];
        }
        return jsonResponse.data;
    })
}

export const getSearchResults = async (term) => {
    return await fetch(`${API}/search.json?q=${term}`, initialOptions)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(jsonResponse => {
        if (!jsonResponse) {
            return [];
        }
        return jsonResponse.data;
    })
}

export default getHomePosts;
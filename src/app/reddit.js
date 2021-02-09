export const API = 'https://www.reddit.com';

export const initialOptions = {
    headers: {
        accept: 'application/json',
    },
};


const RedditCall = {
    fetchTrendingSubreddits() {
        return fetch(`${API}/reddits.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children.slice(1);
            });
    },

    fetchHomePosts() {
        return fetch(`${API}/.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children;
            })
    },

    fetchHomePostsPopular() {
        return fetch(`${API}/hot/.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children;
            })
    },

    fetchHomePostsControversial() {
        return fetch(`${API}/controversial/.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children;
            })
    },

    fetchSubredditAbout(rterm) {
        return fetch(`${API}/${rterm}/about.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return {};
                }
                return jsonResponse.data;
            })
    },

    fetchSearchResults(term) {
        return fetch(`${API}/search.json?q=${term}`, initialOptions)
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
    },
}

export default RedditCall;
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

    fetchSinglePost(rsubreddit, id) {
        return fetch (`${API}/${rsubreddit}/comments/${id}/.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return[];
                }
                return jsonResponse[0].data.children[0].data;
            })
    },

    fetchSinglePostComments(rsubreddit, id) {
        return fetch (`${API}/${rsubreddit}/comments/${id}/.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return[];
                }
                return jsonResponse[1].data.children.slice(0, jsonResponse[1].data.children.length-1);
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

    fetchSubredditPosts(rterm) {
        return fetch(`${API}/${rterm}/.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children
            })
    },

    fetchSubredditPostsHot(rterm) {
        return fetch(`${API}/${rterm}/hot.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children
            })
    },

    fetchSubredditPostsRising(rterm) {
        return fetch(`${API}/${rterm}/rising/.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children
            })
    },

    fetchSubredditPostsNew(rterm) {
        return fetch(`${API}/${rterm}/new/.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children
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
                console.log(jsonResponse.data.children);
                return jsonResponse.data.children;
            })
    },
}

export default RedditCall;
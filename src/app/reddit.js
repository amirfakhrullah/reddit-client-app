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
                console.log(jsonResponse.data.children.slice(1));
                return jsonResponse.data.children.slice(1);
            });
    },

    fetchHomePosts() {
        return fetch(`${API}/r/home.json`, initialOptions)
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
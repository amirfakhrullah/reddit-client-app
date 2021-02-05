export const API = 'https://www.reddit.com';

export const initialOptions = {
    headers: {
        accept: 'application/json',
    },
};


const RedditCall = {
    getTrendingSubreddits() {
        return fetch(`${API}/r/trendingsubreddits.json`, initialOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                // console.log(jsonResponse.data.children[0]);
                // return jsonResponse.data.children[0];
                const title = jsonResponse.data.children[0].data.title;
                const strtitle = title.split(" ");
                const results = strtitle.filter(word => )
            })
    },

    getHomePosts() {
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

    getSearchResults(term) {
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
import React from 'react';
import './SearchResults.css';

import RedditPost from '../RedditPost/RedditPost';

import { connect } from 'react-redux';

import { LoadingIndicator } from '../../index';

function SearchResults(props) {

    return (
        <div className="search__results">
            <h1 className="search__results__title">Results:</h1>
            {
                props.results && props.results.map(post => (
                    <RedditPost post={post} key={post.data.id} />
                ))
            }
            <LoadingIndicator />
        </div>
    )
}

export default connect((state => {
    const { redditPostList } = state
    return {
        results: redditPostList.searchResults
    }
}))(SearchResults);

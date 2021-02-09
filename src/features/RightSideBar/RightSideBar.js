import React from 'react';
import './RightSideBar.css';

export default function RightSideBar() {
    return (
        <div className="rightsidebar-container">
            <div className="rightsidebar">
                <h3 className="subreddit__header">Subreddits for Programmers</h3>
                <div className="subreddit-boxes">

                    <div className="subreddit-box" onClick={() => {
                        window.location.href = '/r/ProgrammerHumor';
                    }}>
                        <div className="subreddit__details programmers">
                            <h3 className="subreddit">r/ProgrammerHumor</h3>
                            <p>1.4M Members</p>
                        </div>
                    </div>

                    <div className="subreddit-box" onClick={() => {
                        window.location.href = '/r/programming';
                    }}>
                        <div className="subreddit__details programmers">
                            <h3 className="subreddit">r/programming</h3>
                            <p>3.2M Members</p>
                        </div>
                    </div>

                    <div className="subreddit-box" onClick={() => {
                        window.location.href = '/r/learnprogramming';
                    }}>
                        <div className="subreddit__details programmers">
                            <h3 className="subreddit">r/learnprogramming</h3>
                            <p>2.0M Members</p>
                        </div>
                    </div>

                    <div className="subreddit-box" onClick={() => {
                        window.location.href = '/r/technology';
                    }}>
                        <div className="subreddit__details  programmers">
                            <h3 className="subreddit">r/technology</h3>
                            <p>10.3M Members</p>
                        </div>
                    </div>

                    <div className="subreddit-box" onClick={() => {
                        window.location.href = '/r/technology';
                    }}>
                        <div className="subreddit__details programmers">
                            <h3 className="subreddit">r/webdev</h3>
                            <p>720k Members</p>
                        </div>
                    </div>

                    <div className="subreddit-box" onClick={() => {
                        window.location.href = '/r/compsci';
                    }}>
                        <div className="subreddit__details programmers">
                            <h3 className="subreddit">r/compsci</h3>
                            <p>1.3M Members</p>
                        </div>
                    </div>

                    <div className="subreddit-box" onClick={() => {
                        window.location.href = '/r/javascript';
                    }}>
                        <div className="subreddit__details programmers">
                            <h3 className="subreddit">r/javascript</h3>
                            <p>1.4M Members</p>
                        </div>
                    </div>

                    <div className="subreddit-box" onClick={() => {
                        window.location.href = '/r/react.js';
                    }}>
                        <div className="subreddit__details programmers">
                            <h3 className="subreddit">r/reactjs</h3>
                            <p>239k Members</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

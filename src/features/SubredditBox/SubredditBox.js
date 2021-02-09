import React from 'react';
import './SubredditBox.css';


export default function SubredditBox() {
    return (
        // <div className="subreddit-boxes">
        //     { Array.from(Array(5), (e, i) => {
        //             <div className="subreddit-box">
        //                 <div className="subreddit__image">
        //                     <img src={subreddits[i].data.icon_img} />
        //                 </div>
        //                 <div className="subreddit__details">
        //                     <h3 className="subreddit">{subreddits[i].data.display_name_prefixed}</h3>
        //                     <p>{subreddits[i].data.subscribers} subscribers</p>
        //                 </div>
        //             </div>
        //         })
        //     }
        // </div>

        <div className="subreddit-boxes">
            <div className="subreddit-box">
                <div className="subreddit__image">
                    <img src='' />
                </div>
                <div className="subreddit__details">
                    <h3 className="subreddit">r/AskReddit</h3>
                    <p>50000 subscribers</p>
                </div>
            </div>

            <div className="subreddit-box">
                <div className="subreddit__image">
                    <img src='' />
                </div>
                <div className="subreddit__details">
                    <h3 className="subreddit">r/AskReddit</h3>
                    <p>50000 subscribers</p>
                </div>
            </div>

            <div className="subreddit-box">
                <div className="subreddit__image">
                    <img src='' />
                </div>
                <div className="subreddit__details">
                    <h3 className="subreddit">r/AskReddit</h3>
                    <p>50000 subscribers</p>
                </div>
            </div>

            <div className="subreddit-box">
                <div className="subreddit__image">
                    <img src='' />
                </div>
                <div className="subreddit__details">
                    <h3 className="subreddit">r/AskReddit</h3>
                    <p>50000 subscribers</p>
                </div>
            </div>

            <div className="subreddit-box">
                <div className="subreddit__image">
                    <img src='' />
                </div>
                <div className="subreddit__details">
                    <h3 className="subreddit">r/AskReddit</h3>
                    <p>50000 subscribers</p>
                </div>
            </div>

            <div className="subreddit-box">
                <div className="subreddit__image">
                    <img src='' />
                </div>
                <div className="subreddit__details">
                    <h3 className="subreddit">r/AskReddit</h3>
                    <p>50000 subscribers</p>
                </div>
            </div>
        </div>
    );
}

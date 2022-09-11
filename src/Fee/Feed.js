import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox.js';
import Post from '../Post';

export default function Feed() {
  return (
    <div className="feed">
        <div className='feed__header'>
        <h2>Home</h2>
        </div>
      {/* {Header} */}

<TweetBox/>
<Post/>
      {/* {Tweetboc} */}
    
      {/* {Psts} */}
    </div>
  )
}

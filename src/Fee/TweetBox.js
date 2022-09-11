import React from 'react';
import './TweetBox.css';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
const TweetBox = () => {
  return (
    <div className='tweetbox'>
      <form >
        <div className="tweetbox__input">
            <PersonIcon></PersonIcon>
          
<input  placeholder='whats happenig?'></input>  </div>
<input classsName="tweetbox_inputimage" placeholder='insert url'></input>
<Button className="tweetbutoon">Tweet</Button>
       
      </form>
    </div>
  )
}

export default TweetBox

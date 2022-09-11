import React from 'react'
import './Post.css';
import PersonIcon from '@mui/icons-material/Person';
import { VerifiedUser } from '@mui/icons-material';
import { ChatBubbleOutline } from '@material-ui/icons';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { Publish } from '@material-ui/icons';
import { Repeat } from '@mui/icons-material';

const Post = () => {
  return (
    <div className='post'>
      <div className="post_vatar">
<PersonIcon/>
      </div>
    <div className='post_body'>
<div className='post_header'>
  <div className='post_headertext'>
    <h3>Fidks
      <span>
        <VerifiedUser className='post_badge'></VerifiedUser>
      </span>
    </h3>
  </div>
  <div className='post_headerDescription'>
    <p>dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhsssssssssssssssssssaaaaaaaaaaaaaaaaaaass</p>
  </div>
  <img src='file:///C:/Users/diksh/OneDrive/Desktop/291356568027201.webp' alt='hello'/>
  <div className='pos-footer'>
<ChatBubbleOutline fontSize='small'/>
<Repeat fontSize='small'/>
<FavoriteBorderOutlined  fontSize='small'/>
<Publish  fontSize='small'/>
  </div>
</div>
    </div>
    </div>
  )
}

export default Post

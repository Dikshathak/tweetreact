import React from 'react'
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SideBarOption from './SideBarOption';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Button } from '@material-ui/core';
const Sisebar = () => {
  return (
    <div className='sidebar'>
      {/* //twitter icon */}
      <TwitterIcon className="sidebartwittericon"/>
<SideBarOption active Icon={HomeIcon} text="Home"/>
<SideBarOption Icon={SearchIcon} text="Explore"/>

<SideBarOption Icon={NotificationsIcon} text="Notifications"/>
<SideBarOption Icon={NotificationsIcon} text="Messages"/>
<SideBarOption Icon={NotificationsIcon} text="Bookmarks"/>
<SideBarOption Icon={NotificationsIcon} text="Lists"/>
<SideBarOption Icon={NotificationsIcon} text="Progile"/>
<SideBarOption Icon={NotificationsIcon} text="More"/>
      {/* {sidebaroption} */}
      {/* {button tweet} */}
      <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sisebar

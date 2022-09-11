import React from 'react'
import './SideBarOptions.css';


const SideBarOption = (props) => {
  return (
    <div className={`sidebaroption ${props.active && 'sidebaroption--active'}`}>
     <props.Icon/>
      <h2>{props.text}</h2>
    </div>
  )
}

export default SideBarOption

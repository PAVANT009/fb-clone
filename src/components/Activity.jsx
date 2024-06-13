import React from 'react'
import "../styles/Activity.css"
import usericon from "../assets/user.svg"
import photoicon from "../assets/photo.svg"
import vidicon from "../assets/vid.svg"
import happyicon from "../assets/happy.svg"
function Activity() {
  return (
    <div className='Acitivity'>
      <div className='post-upper-block'>
        <img src={usericon} alt="usericon" className='Activity-user' />
        <input type="text" value="What's on your mind,Pavan?" className='Activity-input'/>
      </div>
      <hr className='line'/>
      <div className='Activity-icon'>
        <div className="icon-text-container">
          <img src={vidicon} alt="videoicon" className="icon" />
          <span className="text">Live video</span>
        </div>
        <div className="icon-text-container">
          <img src={photoicon} alt="videoicon" className="icon" />
          <span className="text">Photo/video</span>
        </div>
        <div className="icon-text-container">
          <img src={happyicon} alt="videoicon" className="icon" />
          <span className="text">Feeling/activity</span>
        </div>

      </div>
      

        

    </div>
  )
}

export default Activity

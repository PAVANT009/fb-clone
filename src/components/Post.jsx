import React from 'react'
import "../styles/Post.css"
import usericon from "../assets/user.svg"
import indiapf from "../assets/india.svg"
import indiafort from "../assets/indian-fort.svg"
import indiam from "../assets/india-media.jpg"
import like from "../assets/like.svg"
import likehand from "../assets/like-hand.svg"
import share from "../assets/share.svg"
import comment from "../assets/comment.svg"


function Post() {
  return (
    <div className='Post'>
      <div className='Post-upperblock'>
        <img src={indiafort} alt="usericon" className='Post-user'/>
        <div className='Post-up-text-block'>
            <div className='Post-main-block'>
                <span>Pavan teja kumar</span>
                <span style={{ color: "rgb(18,140,228)",  padding: "0px" }}>Follow</span>                
            </div>
            <div className='Post-bottom-block'>
                <span>3 days ago .</span>
                <img src={indiapf} alt="countrypf" className='countrypf' />
            </div>
        </div>
      </div>
    <div className='post-text'>
        <span>Hello world!</span>
    </div>
    <div className='post-media'>
        <img src={indiam} alt="" />
    </div>
    <div className='post-down-block'>
      <div className='p-db-first'>
        <div className='post-db-like-block'>
            <img src={like} alt=""  className='like'/>
            <h3>2.7k</h3>
        </div>    
        <div className='post-db-cs'>
            <h3>29 comments</h3>
            <h3>729 shares </h3>
        </div>
      </div>
      <div className='p-db-second'>
          <img src={likehand} alt="" />
          <img src={comment} alt="" />
          <img src={share} alt="" />
      </div>

    </div>
    </div>
  )
}

export default Post

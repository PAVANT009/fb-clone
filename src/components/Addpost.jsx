import React from 'react'
import plusicon from "../assets/plus-blue.svg"
import "../styles/Addpost.css"

function Addpost() {
  return (
    <div className='post'>
      <img src={plusicon} alt="plus icon" className='Addpodt-plus' />
      <div className='text-post'>
        <h2>Create Story</h2>
        <h3>Share a photo or write something</h3>
      </div>
    </div>
  )
}

export default Addpost

import React from 'react'

function Iconbar({icon}) {
  return (
    <div>
      <img className='Home-icon' src={icon} alt="homeicon" />
      {/* <div className="line"></div> */}
    </div>
  )
}

export default Iconbar

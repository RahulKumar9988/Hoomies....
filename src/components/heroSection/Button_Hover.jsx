import React from 'react'
import './buttonHover.css'
function Button_Hover({name}) {
  return (
    <div>
        <button className='z-10 h-12 p-2 text-xl'>
          <span className="spark__container">
            <span className="spark" />
          </span>
          <span className="backdrop" />
          <span className="text">{name}</span>
        </button>
    </div>
  )
}

export default Button_Hover
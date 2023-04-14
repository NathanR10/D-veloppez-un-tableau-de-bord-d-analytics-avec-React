import React from 'react'
import '../styles/Icon.css'

export default function Icon ({ img, margin }) {
  return (
    <div className='icon_frame' style={{ margin: `${margin}px 0` }}>
      <img src={img} />
    </div>
  )
}


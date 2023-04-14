import React from 'react'
import '../styles/Stat.css'

export default function Stat ({ icon, color, value, label, type }) {
  return (
    <div className='Stat_frame'>
      <div className='stat_iconFrame' style={{ backgroundColor: color }}>
        <img src={icon} />
      </div>
      <div className='stat_labelFrame'>
        <div className='stat_value'>{`${value}${type}`}</div>
        <div className='stat_label'>{label}</div>
      </div>
    </div>
  )
}


import React from 'react'
import '../styles/Stat.css'
import PropTypes from 'prop-types'

/**
 * Component for showing brut stat of user.
 * 
 * @component
 * @example
 * return (
 *  <Stat icon={string} color={string} value={number} label={string} type={string} />
 * )
 */

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

Stat.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

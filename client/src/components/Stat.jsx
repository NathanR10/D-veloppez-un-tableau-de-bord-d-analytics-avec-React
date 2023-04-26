import React from 'react'
import '../styles/Stat.css'
import PropTypes from 'prop-types'

/**
  * Component for showing flat stat of user.
  *
  * @param {object} props - The properties passed to the component.
  * @param {string} props.icon - Url of an image.
  * @param {string} props.color - Color of the background of icon, (hexa || rgb || rgba || HTML color names).
  * @param {number} props.value - Displayed stat.
  * @param {string} props.label - Name of the displayed stat.
  * @param {string} props.type - Measurement symbols corresponding to the label.
  * @returns {JSX.Element} The chart component.
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

import React from 'react'
import '../styles/Icon.css'
import PropTypes from 'prop-types'

/**
 * Component for showing icon in the footer.
 * 
 * @component
 * @example
 * return (
 *  <Icon img={string} margin={number} />
 * )
 */

export default function Icon ({ img, margin }) {
  return (
    <div className='icon_frame' style={{ margin: `${margin}px 0` }}>
      <img src={img} />
    </div>
  )
}

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  margin: PropTypes.number.isRequired
};


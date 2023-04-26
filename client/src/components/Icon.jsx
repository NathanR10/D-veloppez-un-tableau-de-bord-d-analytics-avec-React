import React from 'react'
import '../styles/Icon.css'
import PropTypes from 'prop-types'

/**
  * Component for showing icon in the footer.
  *
  * @param {object} props - The properties passed to the component.
  * @param {number} props.img - Url of an image.
  * @param {number} props.margin - Number corresponding of the margin applied to the icon (4 directions).
  * @returns {JSX.Element} The chart component.
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


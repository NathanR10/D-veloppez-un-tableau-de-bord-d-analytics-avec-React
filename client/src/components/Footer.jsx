import React from 'react'
import '../styles/Footer.css'
import Icon from './Icon'

export default function Footer () {
  return (
    <div className='footer_frame'>
      <div></div>
      <div>
        <Icon img="/assets/Meditation.png" margin="20" />
        <Icon img="/assets/Nage.png" margin="20" />
        <Icon img="/assets/Velo.png" margin="20" />
        <Icon img="/assets/Altere.png" margin="20" />
      </div>
      <p className='footer_copyright'>Copyright, SportSee 2020</p>
    </div>
  )
}

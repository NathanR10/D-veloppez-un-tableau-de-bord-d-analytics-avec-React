import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

export default function Login () {

  return (
    <div className='login_frame'>
      <Link className='login_link' to="/home/12">
        Karl Dovineau
      </Link>
      <div className='login_linkSpacer'>|</div>
      <Link className='login_link' to="/home/18">
        Cecilia Ratorez
      </Link>
    </div>
  )
}

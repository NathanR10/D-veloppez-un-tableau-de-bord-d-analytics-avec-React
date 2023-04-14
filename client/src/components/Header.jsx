import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

export default function Header () {
  // TODO: si aucun ID -> choix entre les 2 users
  return (
    <nav className='header_nav'>
      <Link to="/">
        <img className='header_logo' src="/assets/logo.png" />
      </Link>
      <Link className='header_navLink' to="/">
        Accueil
      </Link>
      <Link className='header_navLink' to="/profil">
        Profil
      </Link>
      <Link className='header_navLink' to="/reglage">
        Réglage
      </Link>
      <Link className='header_navLink' to="/communaute">
        Communauté
      </Link>
    </nav>
  )
}

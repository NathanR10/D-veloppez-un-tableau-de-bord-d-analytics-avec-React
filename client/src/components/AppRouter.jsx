import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Setting from '../pages/Setting'
import Community from '../pages/Community'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../pages/Login'
import '../styles/App.css'

/**
 * Main router component for the app.
 * Responsible for handling routing using React Router.
 * Renders different pages based on the current URL path.
 * 
 * @component
 * @example
 * return (
 *  <AppRouter />
 * )
 */

function AppRouter () {
  return (
    <Router>
      <Header />
      <div className="mainFrame">
        <Footer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/profil/" element={<Profile />} />
          <Route path="/reglage" element={<Setting />} />
          <Route path="/communaute" element={<Community />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter

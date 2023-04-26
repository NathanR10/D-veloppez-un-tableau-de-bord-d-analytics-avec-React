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
 * AppRouter is a React component that defines the routing configuration of the project.
 *
 * @returns {JSX.Element}
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

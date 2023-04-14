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

function AppRouter () {
  return (
    <Router>
      <Header />
      <div className="mainFrame">
        <Footer />
        <Routes>
          {/* TODO: page "/" -> home & page "stats/:id -> pageStats(home)"*/}
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

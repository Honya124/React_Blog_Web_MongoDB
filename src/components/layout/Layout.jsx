import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from '../../pages/home/Home'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import Settings from '../../pages/settings/Settings'
import SinglePage from '../../pages/singlePage/SinglePage'
import Write from '../../pages/write/Write'
import TopBar from '../topbar/TopBar'
function Layout() {
  return (
    <div>
      <Router>
      <TopBar />
        <Routes> 
            <Route path='/' exact element={<Home />} />
            <Route path='/post/:postId'  element={<SinglePage />} />
            <Route path='/write'  element={<Write />} />
            <Route path='/settings'  element={<Settings />} />
            <Route path='/login'  element={<Login />} />
            <Route path='/register'  element={<Register />} />

        </Routes>
      </Router>
    </div>
  )
}

export default Layout

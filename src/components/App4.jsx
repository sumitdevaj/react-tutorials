import React from 'react'
import { Link, NavLink, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Home'
import About from './route/About'
import Contact from './route/Contact'
import ProtectedRoutes from './route/ProtectedRoutes'
import Login from './route/Login'

const isAuthenticated = true;
const App4 = () => {
    
  return (
    <div>
    <Router>
    <Routes>
    
    <Route path="/" element={<Home/>}></Route>
    
    <Route path='/about' element={<ProtectedRoutes isAuth={isAuthenticated}><About/></ProtectedRoutes>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </Router>
    </div>
  )
}

export default App4
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <ul>
      <li><NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }>HOME</NavLink></li>
      <li><Link to='/about'>ABOUT</Link></li>
      <li><Link to='/contact'>CONTACT us</Link></li>
      </ul></div>
  )
}

export default About
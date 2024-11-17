import React from 'react'
import Login from './Login'
import { useAuth } from './context/authContext'
import { Link, NavLink } from 'react-router-dom'
import "./Home.css"

// const Home = ({user,login}) => {
//   return (
//     <div>
//     {user ? (<><h3> welcome to the Home page </h3>
//         <p> you logged in as {user.name}</p>
//         </>): (<Login login={login}/>)}
//     </div>
//   )
// }

const Home = () => {
  //  const { user} =  useAuth()
  const user = true
    return (
      <div>
      <nav>
      <ul>
      <li><NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }>HOME</NavLink></li>
      <li><Link to='/about'>ABOUT</Link></li>
      <li><Link to='/contact'>CONTACT us</Link></li>
      </ul>
      </nav>
      {user ? (<><h3> welcome to the Home page </h3>
          <p> you logged in as {user.name}</p>
          </>): (<Login/>)}
      </div>
    )
  }

export default Home
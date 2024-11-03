import React from 'react'
import { useAuth } from './context/authContext'


// with props 
// const Navbar = ({user,logout}) => {
//   return (
//     <div>
//     <h1>my App</h1>
//     {user ? (
//         <> 
//         <div>welcome ,{user.name} </div>
//         <button onClick={logout} > logOut</button>
//         </>
//     ):(<><h1>please log in </h1></>)}
//     </div>
//   )
// }
// with context api 
const Navbar = () => {
   const {user,logOut}=  useAuth()
    return (
      <div>
      <h1>my App</h1>
      {user ? (
          <> 
          <div>welcome ,{user.name} </div>
          <button onClick={logOut} > logOut</button>
          </>
      ):(<><h1>please log in </h1></>)}
      </div>
    )
  }

export default Navbar
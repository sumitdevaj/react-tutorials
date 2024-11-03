import React from 'react'

const Navbar = ({user,logout}) => {
  return (
    <div>
    <h1>my App</h1>
    {user ? (
        <> 
        <div>welcome ,{user.name} </div>
        <button onClick={logout} > logOut</button>
        </>
    ):(<><h1>please log in </h1></>)}
    </div>
  )
}

export default Navbar
import React from 'react'
import Login from './Login'

const Home = ({user,login}) => {
  return (
    <div>
    {user ? (<><h3> welcome to the Home page </h3>
        <p> you logged in as {user.name}</p>
        </>): (<Login login={login}/>)}
    </div>
  )
}

export default Home
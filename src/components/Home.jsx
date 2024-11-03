import React from 'react'
import Login from './Login'
import { useAuth } from './context/authContext'

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
   const { user} =  useAuth()
    return (
      <div>
      {user ? (<><h3> welcome to the Home page </h3>
          <p> you logged in as {user.name}</p>
          </>): (<Login/>)}
      </div>
    )
  }

export default Home
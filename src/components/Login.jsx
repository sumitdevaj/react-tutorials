import React, { useState } from 'react'
import { useAuth } from './context/authContext'

// const Login = ({login}) => {
//     const [userName,setUserName] = useState('')
//     const handleLogin = () => {
//         login(userName);
//         setUserName('')
//     }
//   return (
//     <div>
//     <h2>login</h2>
//     <input type='text' placeholder=' enter user name' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
//     <button onClick={handleLogin} > login</button>
//     </div>
//   )
// }

const Login = () => {
    const {login} = useAuth()
    const [userName,setUserName] = useState('')
    const handleLogin = () => {
        login(userName);
        setUserName('')
    }
  return (
    <div>
    <h2>login</h2>
    <input type='text' placeholder=' enter user name' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
    <button onClick={handleLogin} > login</button>
    </div>
  )
}

export default Login
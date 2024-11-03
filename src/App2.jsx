import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';

const App2 = () => {
    const [user,setUser] = useState(null);

    const login = (useName)=>{
        setUser({name:useName});
    } 
    const logout = ()=>{
        setUser(null);
    }
  return (
    <div>
    <Navbar user={user} logout={logout}/>
    <Home user={user} login={login}/>
    </div>
  )
}

export default App2
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { AuthProvider, useAuth } from './components/context/authContext';
import Shop from './components/Shop';
import CounterReduce from './components/CounterReduce';


const App3 = () => {
  return (
    <AuthProvider>
    <div>
        
        <Shop/>
    </div>
    </AuthProvider>
  )
}

export default App3
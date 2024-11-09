import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { AuthProvider } from './components/context/authContext';
import Shop from './components/Shop';

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
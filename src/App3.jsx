import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { AuthProvider } from './components/context/authContext';

const App3 = () => {
    
  return (
    <AuthProvider>
    <div>
    <Navbar />
    <Home />
    </div>
    </AuthProvider>
  )
}

export default App3
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
// import { AuthProvider, useAuth } from './components/context/authContext';
import Shop from './components/Shop';
import CounterReduce from './components/CounterReduce';
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './components/LoginPage';
import StoreProduct from './components/product/StoreProduct';
import { Router } from 'react-router-dom';



// const App3 = () => {
//   return (
//     <AuthProvider>
//     <div>
        
//         <Shop/>
//     </div>
//     </AuthProvider>
//   )
// }
// 
const App3 = () => {
  return (
    <Provider store={store}>
    
        <StoreProduct/>
    
    </Provider>
  )
}

export default App3
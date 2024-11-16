import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {
    const isAuthenticated = useSelector((state) =>state.auth.isAuthenticated);
    const dispatch = useDispatch();
    console.log(isAuthenticated);
    const login = ()=>{
        dispatch({type:"LOGIN"})
    }
    const logout = ()=>{
        dispatch({type:"LOGOUT"})
    }
    
  return (
   <>
   {!isAuthenticated ? <> <h1>you are not login plz login </h1></>:<><h1>welcome to our store</h1></>}
   <button onClick={()=>login()}>login</button>
   <button onClick={()=>logout()}>logout</button>
   </>
  )}

export default LoginPage
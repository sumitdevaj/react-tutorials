import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({isAuth, children}) => {
    if(!isAuth){
        return <Navigate to="/login" replace/>
    }
  return children;
}

export default ProtectedRoutes
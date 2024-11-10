import React, {useContext, createContext, useState} from "react";

const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext);

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [count,setCount] = useState(0);
    const login = (uN)=>{
        setUser({name:uN});
    }
    const logOut = ()=>{
        setUser(null);
    }
    const addToCart = ()=>{
        setCount(count+1);
    }
    return (
        <AuthContext.Provider value={{user, login,logOut,addToCart,count}} >
        {children}
        </AuthContext.Provider>

    )
}
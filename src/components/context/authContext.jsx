import React, {useContext, createContext, useState} from "react";

const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext);

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const login = (uN)=>{
        setUser({name:uN});
    }
    const logOut = ()=>{
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user, login,logOut}} >
        {children}
        </AuthContext.Provider>

    )
}
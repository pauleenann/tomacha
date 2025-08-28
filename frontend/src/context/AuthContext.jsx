import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState();
    const [accessToken, setAccessToken] = useState();

    const login = (userData, token)=>{
        setUser(userData);
        setAccessToken(token);
    }

    useEffect(()=>{
        console.log(user, accessToken);
    },[user, accessToken])

    return (
        <AuthContext.Provider value={{user, accessToken, login}}>
            {children}
        </AuthContext.Provider>
    )
};

// custom hook to access value of useContext
export const useAuth = ()=> useContext(AuthContext); 
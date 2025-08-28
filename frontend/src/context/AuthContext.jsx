import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axiosInstance";


const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState();
    const [accessToken, setAccessToken] = useState();

    const login = (userData, token)=>{
        setUser(userData);
        setAccessToken(token);
    }

    const getAccessToken = ()=> accessToken;

    // set up interceptor for initial render
    useEffect(() => {
        // this then runs before every request
        const reqInterceptor = api.interceptors.request.use((config) => {
          const token = getAccessToken(); //get current token
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        });
      
        return () => api.interceptors.request.eject(reqInterceptor);
    }, []);
      

    return (
        <AuthContext.Provider value={{user, accessToken, login}}>
            {children}
        </AuthContext.Provider>
    )
};

// custom hook to access value of useContext
export const useAuth = ()=> useContext(AuthContext); 
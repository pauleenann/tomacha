import { createContext, use, useContext, useEffect, useRef, useState } from "react";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState();
    const [accessToken, setAccessToken] = useState();
    const accessTokenRef = useRef(accessToken);
    const [loading, setLoading] = useState()
    const navigate = useNavigate()

    const login = (userData, token)=>{
        setUser(userData);
        setAccessToken(token);
    }

   useEffect(()=>{
        accessTokenRef.current = accessToken;
   }, [accessToken]);

    // set up interceptor for initial render
    useEffect(() => {
        // this then runs before every request
        const reqInterceptor = api.interceptors.request.use((config) => {
          if (accessTokenRef.current) {
            config.headers.Authorization = `Bearer ${accessTokenRef.current}`;
          }
          return config;
        });

        // refresh access token
        const refreshAccessToken = async ()=>{
            try {
                setLoading(true)
                const response = await api.get('/auth/refresh');

                if(response.data){
                    setUser(response.data.user)
                    setAccessToken(response.data.token)
                    navigate('/')
                }
            } catch (error) {
                console.log('Cannot refresh access token: ', error)
            } finally {
                setTimeout(()=>{
                   setLoading(false) 
                },3000)
            }
        }

        refreshAccessToken();
      
        return () => api.interceptors.request.eject(reqInterceptor);
    }, []);
      
    const data = {
        user,
        accessToken,
        login,
        loading
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
};

// custom hook to access value of useContext
export const useAuth = ()=> useContext(AuthContext); 
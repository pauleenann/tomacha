import { createContext, useContext, useEffect, useRef, useState } from "react";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [loading, setLoading] = useState();
    const [user, setUser] = useState();
    const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
    const [accessToken, setAccessToken] = useState();
    const accessTokenRef = useRef(accessToken);
    const navigate = useNavigate();

    const login = (userData, token)=>{
        setUser(userData);
        setAccessToken(token);
    }

    const refreshAccessToken = async ()=>{
        try {
            setLoading(true)
            const response = await api.get('/auth/refresh');
            console.log('Refresh access token response: ', response)

            if(response.data){
                setUser(response.data.user)
                setAccessToken(response.data.token)
                console.log('Access token refreshed', response.data.token)
                navigate('/home');
            }
        } catch (error) {
            console.log('Cannot refresh access token: ', error)
        } finally {
            setTimeout(()=>{
               setLoading(false) 
            },3000)
        }
    }

   useEffect(()=>{
        accessTokenRef.current = accessToken;
   }, [accessToken]);

    // set up interceptor for initial render
    useEffect(() => {
        console.log('Context Rendered');
        // this then runs before every request
        const reqInterceptor = api.interceptors.request.use((config) => {
          if (accessTokenRef.current) {
            config.headers.Authorization = `Bearer ${accessTokenRef.current}`;
          }
          return config;
        });

        // refresh access token
        refreshAccessToken();
      
        return () => api.interceptors.request.eject(reqInterceptor);
    }, []);
      
    const data = {
        user,
        accessToken,
        login,
        loading,
        refreshAccessToken,
        isCreatePostModalOpen,
        setIsCreatePostModalOpen
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
};

// custom hook to access value of useContext
export const useAuth = ()=> useContext(AuthContext); 
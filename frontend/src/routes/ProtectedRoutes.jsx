
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext"

export const ProtectedRoutes = ()=>{
    const {accessToken} = useAuth();
    
    return accessToken ? <Outlet /> : <Navigate to="/login" />;
}
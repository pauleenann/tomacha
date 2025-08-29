
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext"

export const ProtectedRoutes = ()=>{
    const {accessToken, loading} = useAuth();

    if(loading){
        return (
            <div>Loading</div>
        )
    }
    
    return accessToken ? <Outlet /> : <Navigate to="/login" />;
}
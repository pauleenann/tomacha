
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext"

export const ProtectedRoutes = ()=>{
    const {accessToken} = useAuth();
    
     

    return (
        // <Outlet /> is basically the slot where child routes get injected inside a parent route’s layout.
        accessToken ? <Outlet/> : <Navigate to='/login'/>
    )
}
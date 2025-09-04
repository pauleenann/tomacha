import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import { ProtectedRoutes } from './ProtectedRoutes'
import { useAuth } from '../context/AuthContext'
import { Puff } from 'react-loading-icons'
import Signup from '../pages/Signup/Signup'

const AppRoutes = () => {
    const {loading} = useAuth()
    
    // if backend is still authenticating the user
    if(loading){
        return(
            <div
            className='w-screen h-screen flex items-center justify-center flex-col'>
                <Puff stroke="#31572C" strokeOpacity={.125} speed={.75}/>
                <p className='font-frank-ruhl-libre text-3xl text-default mt-4'>Tomochá</p>
                <p className='text-xl'>Brewing your Tomochá experience</p>
            </div>
        )
    }

  return (
    <Routes>
        {/* public routes */}
        <Route
        path='/'
        element={<Login/>}
        />

        <Route
        path='/signup'
        element={<Signup/>}
        />

        {/* protected routes */}
        <Route element={<ProtectedRoutes/>}>
            <Route
            path='/home'
            element={<Home/>}
            />
        </Route>
    </Routes>
  )
}

export default AppRoutes

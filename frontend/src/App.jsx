import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './pages/Login/Login'
import { ProtectedRoutes } from './routes/ProtectedRoutes'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route
          path='/login'
          element={<Login/>}
          />

          {/* protected routes */}
          <Route element={<ProtectedRoutes/>}>
            <Route
            path='/'
            element={<Home/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

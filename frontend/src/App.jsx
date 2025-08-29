import React from 'react'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes/>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

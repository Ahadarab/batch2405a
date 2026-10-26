import React from 'react'
import Signup from './components/Signup/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './components/Home'

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        } />
      </Routes>
    </div>
  )
}

export default App
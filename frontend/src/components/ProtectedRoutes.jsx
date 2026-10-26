import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const [authenticated, setAuthenticated] = useState(null);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  let active = false;

 const checkAuth = async () => {
    try {
      const data = await fetch("http://localhost:1000/api/v1/auth/profile", {
        credentials: "include"
      })
      if (data.ok) {
        navigate('/')
        setAuthenticated(true)
      }
    } catch (error) {
      console.log(error.message);

    } finally {
      setLoading(true);
    }

  }
  checkAuth();
  if (loading) {
    return <p>Loading......</p>
  }
  if (!authenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoutes
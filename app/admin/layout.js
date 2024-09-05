'use client'
import React from 'react'
import LoginPage from './login/LoginPage'
import { useAuthContext } from '../Context/AuthContext'

const AdminLayout = ({children}) => {
    const { user } = useAuthContext()
    
    return (
        <>
            {user.logged ? children : <LoginPage />}
        </>
  )
}

export default AdminLayout
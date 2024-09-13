'use client'
import React from 'react'
import { useAuthContext } from '@/app/Context/AuthContext'

const LogoutButton = () => {
    const { logout } = useAuthContext()
    return (
        <button
        className="w-full md:w-auto transition px-4 py-1 md:px-6 md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-red-600 hover:bg-red-800 0 focus:ring-4 focus:outline-none focus:ring-red-300"
        onClick={logout}
        >
            Cerrar sesión
        </button>
  )
}

export default LogoutButton
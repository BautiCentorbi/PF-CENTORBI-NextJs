'use client'
import { createContext, useContext, useState } from "react"
import { auth, provider } from "../config/firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState({
        logged: false,
        email: null,
        uid: null,
    })
    
    const registerUser = async(values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }
    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
        setUser({
            logged: true
        })
    }
    const logout = async() => {
        await signOut()
    }
    const googleLogin = async() => {
        await signInWithPopup(auth, provider)
    }

    return(
        <AuthContext.Provider 
        value={
            { 
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }
        }>
            {children}
        </AuthContext.Provider>
)
}


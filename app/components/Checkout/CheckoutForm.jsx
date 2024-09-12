'use client'
import React, { useState } from 'react'

const CheckoutForm = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phoneNumber: '',
    })  
    const [ error, setError ] = useState({})
    const [ loading, setLoading ] = useState(false)    

    const handleChange = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name] : e.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}

        // Name Validation
        if (!user.name) {
            errors.name('Por favor, ingresa un nombre')
        } else if (user.name.length() < 3) {
            errors.name('El nombre debe contener al menos 4 letras')
        }
    }

    return (
    <div>CheckoutForm</div>
  )
}

export default CheckoutForm
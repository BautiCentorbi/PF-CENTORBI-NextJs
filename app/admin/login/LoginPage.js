import React from 'react'
import LoginForm from '@/app/components/admin/forms/LoginForm'

export const metadata = {
  tittle: 'Next Curs - Login',
  description: 'A login form in order to access the admin panel',
}

const LoginPage = () => {
  return (
    <div className='h-screen mt-32'>
        <LoginForm />
    </div>
  )
}

export default LoginPage
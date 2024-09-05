'use client'
import React, { useState } from "react";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuthContext } from "@/app/Context/AuthContext";

const LoginForm = () => {
    const { registerUser, loginUser } = useAuthContext()
    
    const [user, setUser] = useState({
        email: '',
        password:'',
        showPassword: false,
    })
  
    const handleChange = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }));
    };
    

    const [error, setError] = useState({})

    const validateForm = () => {
        // Email Validation
        if(!user.email) {
            error.email = 'Tienes que agregar un email'
        } else if (!/\S+@\S+\.\S+/.test(user.email)){
            error.email = 'El email no es válido'
        }

        return setError(error)
    }

    const handleSubmit = async () => {
        if (!validateForm()) {
            return
        }
      };

    const [ visible, setVisible ] = useState(false)

    const togglePassword = () => {
        setVisible(!visible)
    }

    return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          type="text"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          required
          value={user.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="usuario123@correo.com"
        />
      </div>
      <div className="mb-5">
        <label
          type="text"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Contraseña:
        </label>
        <div className="relative">
            <input
            type={
                visible 
                    ? 'text'
                    : 'password'
            }
            name="password"
            required
            value={user.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*********"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mx-2" >
                {
                    visible
                    ? <FaRegEyeSlash onClick={togglePassword}/>
                    : <FaRegEye onClick={togglePassword}/>
                }
            </div>
        </div>
        <div className="my-12 flex flex-col gap-4">
            <button 
                type="button"
                onClick={() => loginUser(user)}
                className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-ourpink-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
            >
                Iniciar sesión
            </button>
            {/* <button
                className="flex items-center bg-white py-3 px-6 text-blue-900 rounded-full"
                onClick={() => googleLogin()}
                >
                    <FaGoogle size={'3xl'} />
                Login with Google
            </button> */}
            <h4 className="text-center text-slate-200">¿No tienes una cuenta?</h4>
            <button
                type="button"
                onClick={() => registerUser(user)}
                className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-ourpink-light/80 dark:text-white rounded-lg border-2 border-ourpink-light/80 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent dark:border-2 dark:border-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
            >
                Registrarse
            </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

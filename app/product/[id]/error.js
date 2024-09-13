'use client'
import React,{ useEffect } from "react"
import PrimaryButton from "@/app/components/ui/Buttons/PrimaryButton"
import Image from "next/image"

export default function(error, reset) {
    useEffect(() => {
        console.log(error)
    },[error])
    
    return(
        <div className='h-full w-full flex flex-col justify-center items-center gap-20'>
            <Image 
                src={'/images/ServiceError.svg'}
                width={600}
                height={600}
                alt='ServiceError Illustration'
            />
        <div className='flex flex-col justify-center items-center align-center gap-4'>
            <h1 className='text-black dark:text-white text-2xl md:text-5xl font-semibold'>
                <span className='text-ourpink-light dark:text-ourpink-dark font-bold'>Ups! </span>
                Parece que algo salió mal
            </h1>
            <h2 className='text-xl md:text-2xl'>Por favor, inténtalo de nuevo</h2>
            <PrimaryButton label={'Volver al Inicio'} onClick={reset} link={''}  />
        </div>
    </div>
    )
}
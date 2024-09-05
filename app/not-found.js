import React from 'react'
import Image from 'next/image'
import PrimaryButton from './components/ui/Buttons/PrimaryButton'

const NotFound = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center gap-20'>
        <Image 
            src={'/images/NotFound.svg'}
            width={644}
            height={644}
            alt='notfound'
        />
        <div className='flex flex-col justify-center items-center align-center gap-4'>
            <h1 className='text-black dark:text-white text-2xl md:text-5xl font-semibold'>
                <span className='text-ourpink-light dark:text-ourpink-dark font-bold'>Ups! </span>
                Parece que algo salió mal
            </h1>
            <h2 className='text-xl md:text-2xl'>Por favor, inténtalo de nuevo</h2>
            <PrimaryButton label={'Volver al Inicio'} link={'/'} />
        </div>

    </div>
  )
}

export default NotFound
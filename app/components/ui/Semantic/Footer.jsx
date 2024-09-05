import MainLogo from '../../icons/MainLogo'
import Link from 'next/link'
import React from 'react'
import InstagramLogo from '../../icons/InstagramLogo'
import GithubLogo from '../../icons/GithubLogo'
import TwitterLogo from '../../icons/TwitterLogo'

const Footer = () => {
  return (
    <footer className='my-8 bg-slate-200/80 dark:bg-transparent'>
        <div className="grid grid-cols-1 md:grid-cols-3 md:mx-36 justify-center gap-10">
            <div className="flex flex-col items-center justify-center align-center">
              <Link href={'/'}>
                <MainLogo className='transition text-black dark:text-white hover:text-ourpink-light hover:scale-110 w-56 h-56 md:w-80  md:h-80'/>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center align-center min-w-auto">
              <ul>
                  <li className='text-xl transition hover:text-ourpink-light hover:font-semibold hover:translate-x-1'><Link href='/'>Home</Link></li>
                  <li className='text-xl transition hover:text-ourpink-light hover:font-semibold hover:translate-x-1'><Link href='/products'>Productos</Link></li>
                  <li className='text-xl transition hover:text-ourpink-light hover:font-semibold hover:translate-x-1'><Link href='/about'>Nosotros</Link></li>
              </ul>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center mb-4">
              <Link target='blank' rel='noreferrer, noopener, nofollow' href='https://instagram.com/centorbii'>
                <InstagramLogo className='transition size-16 md:size-20 text-black dark:text-white hover:text-ourpink-light hover:scale-125' />
              </Link>
              <Link target='blank' rel='noreferrer, noopener, nofollow' href='https://github.com/BautiCentorbi'>
                <GithubLogo className='transition size-16 md:size-20 text-black dark:text-white hover:text-ourpink-light hover:scale-125' />
              </Link>
              <Link target='blank' rel='noreferrer, noopener, nofollow' href='https://x.com/centorbiiy'>
                <TwitterLogo className= 'transition size-16 md:size-20 text-black dark:text-white hover:text-ourpink-light hover:scale-125' />
              </Link>
            </div>
        </div>
        <span className='flex justify-center text-slate-500'>© 2024 - All rights reserved</span>
    </footer>
  )
}

export default Footer
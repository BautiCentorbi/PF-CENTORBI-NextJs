import React from 'react'
import Link from 'next/link'
import PrimaryButton from '../Buttons/PrimaryButton'

const Card = ({title,body,label,icon,link}) => {
    return (
    <article className='max-w-xs bg-white border border-gray-200 rounded-2xl shadow dark:bg-background-dark dark:border-gray-900'>
        <div className="p-5">
            <div className='pb-4'>
                {icon} 
            </div>
            <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-ourpink-dark">{title}</h5>
            </Link>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{body}</p>
            <PrimaryButton link={link} label={label} />
        </div>
    </article>
  )
}

export default Card
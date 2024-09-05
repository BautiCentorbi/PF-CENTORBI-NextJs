import React from 'react'
import Card from '../Cards/Card'
import { GrStorage, GrSearch, GrBug } from "react-icons/gr"

const InfoSection = () => {
  return (
    <div className='w-auto mt-8'>
        <h2 className='text-center text-5xl font-semibold'>Productos
            <span className='uppercase font-black text-ourpink-light dark:text-ourpink-dark'> Destacados</span>
        </h2>
        <section className='grid grid-cols-1 justify-items-center md:grid-cols-3 my-8 md:my-24 gap-8 md:gap-32 md:mx-auto'>
            <Card icon={<GrSearch size={'3rem'}/>} title='UX/UI Research' body="Our research system provides a complete benchmark of the competency and all the analytic stuff based on the actual and future market." label='Ir al curso'link={'/products/ux-ui-design'} />
            <Card icon={<GrStorage size={'3rem'}/>} title='Backend Development' body="We've developed our own storage system, that incluedes up to 64gb of cloud storage. It's modular, fast and easy to combine with other stuff" label='Ir al curso'link={'/products/backend-development'} />
            <Card icon={<GrBug  size={'3rem'}/>} title='SEO Especialist' body="We take care of the SEO, in order to optimize the positioning, we code for the crawler. This way, they can search and find what Google expect to be in there." label='Ir al curso'link={'/products/web-development'} />
        </section>
    </div>
  )
}

export default InfoSection
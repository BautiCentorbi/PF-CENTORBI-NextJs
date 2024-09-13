import React from 'react'
import ItemList from '@/app/components/ui/ItemList/ItemList'

export const metadata = {
    title: 'Next Curs - Cursos',
    description: 'Explore our wide selection of courses designed to offer unique learning experiences. Find the perfect course for you and start your journey towards knowledge and personal development.',
    keywords: 'Online Learning, Educational Courses, Learning Experiences, Professional Growth, Course Catalog, E-learning Platform, Knowledge Enhancement ',
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const dynamic = 'force-dynamic';

const getProducts = async() => {
    const data = await fetch(`${apiUrl}/api/productos`, {cache: 'no-cache'})
    if (!data.ok) {
        const errorText = await data.text()
        console.log('Error response form api', errorText)
        throw new Error('Error fetching data')
    }
    const productos = await data.json()
    return productos
}
const Productos = async() => {
    const products = await getProducts()
    return (
    <>  
        <ItemList 
            productos={products}
        />
    </>
  )
}

export default Productos
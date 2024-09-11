import React from 'react'
import ItemList from '@/app/components/ui/ItemList/ItemList'

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
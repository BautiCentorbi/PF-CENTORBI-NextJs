import React from 'react'
import ItemList from '@/app/components/ui/ItemList/ItemList'


const getProducts = async() => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/productos`, {cache: 'no-cache'})
    if (!data.ok) {
        throw new Error('Error fetching data')
    }
    const productos = await data?.json()
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
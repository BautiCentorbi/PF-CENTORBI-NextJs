import React from 'react'
import ItemList from '@/app/components/ui/ItemList/ItemList'

const getProducts = async() => {
    const data = await fetch(`${process.env.API_BASE_URL}/api/productos`, {cache: 'no-cache'})
    if (!data.ok) {
        throw new Error('Error fetching data')
    }
    const productos = await data.json()
    return productos
}
const Productos = async() => {
    const products = await getProducts()
    console.log(products)
    return (
    <>  
        <ItemList 
            productos={products}
        />
    </>
  )
}

export default Productos
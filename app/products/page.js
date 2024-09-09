import React from 'react'
import ItemList from '../components/ui/ItemList/ItemList'

const getProducts = async() => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/productos`, {cache: 'no-cache'})
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
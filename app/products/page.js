import React from 'react'
import ItemList from '../components/ui/ItemList/ItemList'

const getProducts = async() => {
    const data = await fetch(`http://localhost:3000/api/productos`, {cache: 'no-cache'})
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
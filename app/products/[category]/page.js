import React from 'react'
import ItemList from '@/app/components/ui/ItemList/ItemList'

export async function generateMetadata({params, searchParams}, parent) {
    return {
        title: `NextCurs - ${params.category.replaceAll("-", " ").toUpperCase()}`,
    }
}

export function generateStaticParams () {
    return [
        {category: 'ux-ui-design'},
        {category: 'web-development'},
        {category: 'backend-development'},
        {category: 'machine-learning'},
    ]
}

const getProducts = async(category) => {
    const data = await fetch(`http://localhost:3000/api/productos/${category}`, {cache: 'no-cache'})
    const productos = await data.json()
    return productos
}

const Products = async ({params}) => {
    const { category } = params
    const products = await getProducts(category)
    return( 
    <>
        <ItemList 
            productos={products} />
        </>
    )
}

export default Products
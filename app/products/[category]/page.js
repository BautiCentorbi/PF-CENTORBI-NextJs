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

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const getProducts = async(category) => {
    const data = await fetch(`${apiUrl}/productos/${category}`, {cache: 'no-cache'})
    if (!data.ok) {
        const errorText = await data.text()
        console.log('Error response from api', errorText)
        throw new Error('Error fetching data')
    }
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
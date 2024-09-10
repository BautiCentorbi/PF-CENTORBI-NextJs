import React from 'react'
import ItemList from '@/app/components/ui/ItemList/ItemList'
import { NextResponse } from 'next/server'

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

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

const getProducts = async(category) => {
    const data = await fetch(`${apiUrl}/productos/${category}`)
    const productos = await data.json()
    return NextResponse.json(productos)
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
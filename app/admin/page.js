import React from 'react'
import ProductsTable from '../components/admin/ProductsTable'
import LogoutButton from './login/LogoutButton'

const AdminPage = () => {
  return (
    <div className='flex flex-col flex-grow h-[80vh] w-full items-center justify-start my-24 gap-8'>
      <h1 className='text-5xl font-bold'>Listado de Productos</h1>
      <div className='flex items-center gap-10'>
        <h2 className='uppercase text-lg'>Sesión iniciada!</h2>
        <LogoutButton />
      </div>
      <ProductsTable />
    </div>
  )
}

export default AdminPage
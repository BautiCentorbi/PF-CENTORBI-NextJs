import React from 'react'
import ProductsTable from '@/app/components/admin/ProductsTable'
import LogoutButton from '@/app/components/ui/Buttons/LogoutButton'
const AdminPage = () => {
  return (
    <div className='flex flex-col flex-grow h-[80vh] w-full items-center justify-start my-8 gap-8'>
      <h1 className='text-2xl md:text-5xl font-bold'>Listado de Productos</h1>
      <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 w-auto'>
        <h2 className='uppercase text-md md:text-lg'>Sesión iniciada!</h2>
        <LogoutButton />
      </div>
      <ProductsTable />
    </div>
  )
}

export default AdminPage
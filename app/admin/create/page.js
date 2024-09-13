import CreateForm from '@/app/components/admin/forms/CreateForm'
import React from 'react'

export const metadata = {
  title: 'Next Curs - Create Product',
  description: 'Create a product from scratch by completing this form',
  keywords: 'admin, create, form, born, product',
}

const CreatePage = () => {
  return (
    <div className='h-screen'>
        <CreateForm />
    </div>
  )
}

export default CreatePage
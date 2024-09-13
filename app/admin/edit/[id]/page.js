import React from 'react'
import EditForm from '@/app/components/admin/forms/EditForm'

export const metadata = {
  title: 'Next Curs - Edit Product',
  description: 'Complete edit form to reasign values of a certain product',
  keywords: 'admin, edit, form, reasign, product',
}

const EditPage = async({params}) => {
  try {
    const { id } = params
    return (
        <div className='flex flex-col flex-grow h-[80vh] w-full items-center justify-start my-24 gap-8'>
            <EditForm productId={id}/>
        </div>
    )

  } catch (error) {
    throw new Error(error)
  }
}

export default EditPage
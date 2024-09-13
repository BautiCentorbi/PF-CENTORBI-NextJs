import React from 'react'
import EditForm from '@/app/components/admin/forms/EditForm'

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
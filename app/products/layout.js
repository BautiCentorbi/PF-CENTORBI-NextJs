import React from 'react'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'

export async function generateMetadata({params, searchParams}, parent) {
  return {
      title: `NextCurs - Productos`,
      keywords: 'ux-ui, design, user-experience, user-interface, course, web-development, backend-development, machine-learning'
  }
}

const layout = ({children}) => {
  return (
    <div className='flex flex-col items-center'>
        <NavigationMenu />
        {children}
    </div>
  )
}

export default layout
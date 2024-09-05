import { useCartContext } from '@/app/Context/CartContext'
import React, {useState} from 'react'

const StockCounter = ({stock, initialValue, onAdd, }) => {
  const [ count, setCount ] = useState(initialValue)
  const {addToCart} = useCartContext()

  const increment = () => {
    count < stock && setCount(count + 1)
  }
  const decrement = () => {
    count > initialValue && setCount(count - 1)
  }
  
    return (
    <div className='flex flex-col'>
      {
        stock === 0 ?
        <div className='w-full'>
          <h4>Producto no disponible en este momento</h4>
        </div>
        :
        <div className='flex flex-col gap-4'>
          <h2 className='text-xl md:text-3xl'>Cantidad de productos: </h2>
          <div className='flex flex-row items-center justify-center'>
            <button className='transition px-4 py-1 md:px-6  md:py-2 text-2xl md:text-lg font-semibold text-center text-white dark:text-black rounded-lg dark:bg-ourpink-dark hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-ourpink-light dark:hover:bg-ourpink-dark/50 dark:focus:ring-pink-400' onClick={decrement}>-</button>
            <div className='bg-slate-200 dark:bg-ourpink-dark/20 w-full h-full py-1 mx-4 rounded-lg text-center'>
              <h2 className='text-2xl md:text-3xl'>{count}</h2>
            </div>
            <button className='transition px-4 py-1 md:px-6  md:py-2 text-2xl md:text-lg font-semibold text-center text-white dark:text-black rounded-lg bg-ourpink-dark hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-ourpink-light dark:hover:bg-ourpink-dark/50 dark:focus:ring-pink-400' onClick={increment}>+</button>
          </div>
          <button className='w-full transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-ourpink-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
      }
    </div>
  )
}

export default StockCounter
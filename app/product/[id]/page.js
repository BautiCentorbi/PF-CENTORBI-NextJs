'use client'
import ItemDetail from "@/app/components/ui/Item/ItemDetail"
import ItemDetailSkeleton from "@/app/components/ui/Skeleton/ItemDetailSkeleton"
import { db } from "@/app/config/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const ProductDetail = () => {
  const { id } = useParams()
  const [ loading,setLoading ] = useState(false)
  const [ singleProduct, setSingleProduct ] = useState(null)
  // const { addToCart } = useCartContext()
  
  const getProductById = async (id) => {
    try {
      const productRef = collection(db, 'productos')
      const q = query(productRef, where('id', '==', parseInt(id)))
      const querySnapshot = await getDocs(q)
      if(!querySnapshot.empty){ 
        return querySnapshot.docs[0].data()
      }
      else {
        return []
      }
    } catch (error) {
      return []
    }
  }
  
  useEffect(() => {
    const fetchProducts = async() => {
      setLoading(true) 
      const product = await getProductById(id)
      setSingleProduct(product)
      setLoading(false)
    }
    fetchProducts()
  }, [id])

  return (
    <>
      {
        loading ?
        <div className="my-4 md:my-16 w-full flex items-start justify-center h-screen ">
          <ItemDetailSkeleton />
        </div>
        :
        <div className="my-4 md:my-16 w-full flex items-start justify-center h-screen ">
          <ItemDetail 
            name={singleProduct?.name}
            img={singleProduct?.img}
            stock={singleProduct?.stock}
            lgDescription={singleProduct?.lgDescription}
            id={singleProduct?.id}
            price={singleProduct?.price}
          />
        </div>
      }
    </>
  )
}

export default ProductDetail

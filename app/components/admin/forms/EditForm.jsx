'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '@/app/config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { Toaster, toast } from 'sonner';

const EditForm = ({productId}) => {
  const router = useRouter()
  const [product, setProduct] = useState({
    name: "",
    id: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    lgDescription: "",
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'productos', productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        throw new Error('No such document!');
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);


  const handleChange = (event) => {
    setProduct((product) => ({
      ...product,
      [event.target.name]: event.target.value,
    }));
  };

  const handeImageChange = async(event) => {
    const storageRef = ref(storage, uuidv4())
    const fileSnapshot  = await uploadBytes(storageRef, event.target.files[0])

    const fileUrl = await getDownloadURL(fileSnapshot.ref)
    
    setProduct({...product, img: fileUrl})
  }

  const [error, setError] = useState({})

  const validateForm = () => {
    const errors = {};

    if (!product.name) {
      errors.name = "Debes agregar un nombre al producto";
    }

    if (!product.id) {
      errors.id = "Debes agregar un ID al producto";
    }

    if (!product.price) {
      errors.price = "Debes agregar un precio al producto";
    } else if (parseFloat(product.price) < 10000) {
      errors.price = "El precio no puede ser menor a 10.000";
    }

    if (!product.stock) {
      errors.stock = "Debes agregar una cantidad de stock al producto";
    } else if (parseFloat(product.stock) < 1) {
      errors.stock = "El stock no puede ser menor a 1";
    }

    if (!product.description) {
      errors.description = "Debes agregar una descripción al producto";
    } else if (product.description.length < 30) {
      errors.description = "La descripción no puede contener menos de 30 caracteres";
    }

    if (!product.lgDescription) {
      errors.lgDescription = "Debes agregar un detalle al producto";
    } else if (product.lgDescription.length < 30) {
      errors.lgDescription = "El detalle de producto no puede contener menos de 30 caracteres";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const docRef = doc(db, 'productos', productId);
        await updateDoc(docRef, product);
        toast.success('Producto actualizado correctamente');
        router.push('/admin');
      } catch (error) {
        toast.error('Hubo un problema al actualizar el producto');
      }
    } else {
      toast.error('Por favor, corrige los errores en el formulario');
    }
  };

  
  return (
    <div>
      <Toaster richColors expand={false} />
      <h1>Estas editando: {product.name}</h1>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre:
          </label>
          <input
            type="text"
            value={product.name}
            name="name"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="MongoDB Course"
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Imágen:
          </label>
          <input
            type="file"
            name="image"
            onChange={handeImageChange}
            alt={product.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Este es un curso de MongoDB donde aprenderás..."
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Categoría:
          </label>
          <input
            type="text"
            value={product.category}
            name="category"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ux-ui-design"
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Id:
          </label>
          <input
            type="text"
            value={product.id}
            name="id"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="17"
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Precio:
          </label>
          <input
            type="text"
            value={product.price}
            name="price"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="90500"
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock:
          </label>
          <input
            type="text"
            value={product.stock}
            name="stock"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100"
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descripción:
          </label>
          <input
            type="text"
            value={product.description}
            name="description"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Este es un curso de MongoDB donde aprenderás..."
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Detalle del Producto:
          </label>
          <textarea
            type="text"
            value={product.lgDescription}
            name="lgDescription"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="En este curso repasarás todos los conceptos de..."
          />
        </div>
        <div className="mb-5">
            <button 
                type="button"
                onClick={handleSubmit}
                className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-ourpink-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
            >
                Añadir producto
            </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm
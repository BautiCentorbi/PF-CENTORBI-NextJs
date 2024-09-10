'use client'
import React, {useState} from "react";
import { db, storage } from "@/app/config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'sonner'


const createProduct = async(values) => {
    const id = uuidv4()
    const price = parseFloat(values.price)
    const stock = parseFloat(values.stock)

    const docRef =  doc(db, 'productos', id.toString())
    
    return setDoc(docRef, {
        ...values,
        id,
        stock,
        price,
        img: values.img
    })
    .then(() => console.log('Producto Agregado'))
}

const CreateForm = () => {
    const router = useRouter()
  const [values, setValues] = useState({
    name: "",
    id: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    lgDescription: "",
  });

  const [file, setFile] = useState(null);
  
  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handeImageChange = async(event) => {
    const storageRef = ref(storage, uuidv4())
    const fileSnapshot  = await uploadBytes(storageRef, event.target.files[0])

    const fileUrl = await getDownloadURL(fileSnapshot.ref)
    
    setValues({...values, img: fileUrl})
  }

  const [error, setError] = useState({});

  const validateForm = () => {
    // name Validation
    const errors = {};
    if (!values.name) {
      errors.name = "Debes agregar un nombre al producto";
    } else if (values.name.length < 4) {
      errors.name = "El nombre debe contener al menos 4 caracteres";
    }
    // id Validation
    if (!values.id) {
      errors.id = "Debes agregar un ID al producto";
    } else if (values.id !== Number) {
      errors.id = "El ID debe ser un número, no una cadena de texto";
    }
    // price Validation
    if (!values.stock) {
      errors.price = "Debes agregar un precio al producto";
    } else if (values.price !== Number) {
      errors.price = "El precio debe ser un número, no una cadena de texto";
    } else if (values.price.length < 10000) {
      errors.price = "El precio no puede ser menor a 10.000";
    }
    // stock Validation
    if (!values.stock) {
      errors.stock = "Debes agregar una cantidad de stock al producto";
    } else if (values.stock !== Number) {
      errors.id = "El ID debe ser un número, no una cadena de texto";
    } else if (values.stock.length < 1) {
      errors.stock = "El stock no puede ser menor a 1";
    }
    // description Validation
    if (!values.description) {
      errors.description = "Debes agregar una descripción al producto";
    } else if (values.description.length < 30) {
      errors.description =
        "La descripción no puede contener menos de 30 caracteres";
    }
    // lgDescription Validation
    if (!values.lgDescription) {
      errors.lgDescription = "Debes agregar un detalle al producto";
    } else if (values.lgDescription.length < 30) {
      errors.lgDescription =
        "El detalle de producto no puede contener menos de 30 caracteres";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (setError.length === 0) {
      toast.success('Has añadido correctamente el producto')
      await createProduct(values, file);
    } else {
      toast.warning('Revisa y/o completa todos los campos para continuar')
      return
    }
    setError('')
  };

  return (
    <div>
      <Toaster richColors expand={false} />
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre:
          </label>
          <input
            type="text"
            value={values.name}
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
            alt={values.name}
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
            value={values.category}
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
            value={values.id}
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
            value={values.price}
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
            value={values.stock}
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
            value={values.description}
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
            value={values.lgDescription}
            name="lgDescription"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="En este curso repasarás todos los conceptos de..."
          />
        </div>
        <div className="mb-5">
            <button 
                type="submit"
                className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-ourpink-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
            >
                Añadir producto
            </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;

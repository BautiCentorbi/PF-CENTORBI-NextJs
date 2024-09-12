"use client";
import { db } from "@/app/config/firebaseConfig";
import { useCartContext } from "@/app/Context/CartContext";
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const router = useRouter()
  
    const { cart, totalPrice, clearCart } = useCartContext()

    const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    e.preventDefault()
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    // Name Validation
    if (!user.name) {
      errors.name = "Tienes que agregar un nombre";
    } else if (user.name.length < 4) {
      errors.name = "El nombre debe tener al menos 4 caracteres";
    }

    // Email Validation's
    if (!user.email) {
      errors.email = "Tienes que agregar un email";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "El email no es válido";
    }
    if (!user.repeatedEmail) {
      errors.repeatedEmail = "Tienes que agregar un email";
    } else if (!/\S+@\S+\.\S+/.test(user.repeatedEmail)) {
      errors.repeatedEmail = "El email no es válido";
    } else if (user.repeatedEmail !== user.email) {
      errors.repeatedEmail = "Los emails no coinciden";
    }

    // PhoneNumber Validation
    if (!user.phoneNumber) {
      errors.phoneNumber = "Tienes que ingresar un número de teléfono";
    } else if (user.phoneNumber < 10) {
      errors.phoneNumber =
        "El número de teléfono debe contener al menos 10 caracteres";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  }

  const getOrder = async() => {
    if (!validateForm()) {
        return
    }
    if (cart.length === 0) {
        Swal.fire({
            title: "Carrito Vacío",
            text: 'Debes agregar algo al carrito antes de generar una orden',
            icon: "error",
            confirmButtonColor: "#7B341E",
            confirmButtonText: "Aceptar",
        }).then(() => {
            router.push('/products')
        })
        return
    }
    const dbRef = collection(db, 'orders')

    try {
        for (const item of cart) {
            const docRef = doc(db, 'productos', item.id)
            const productDoc = await getDoc(docRef)

            const currentStock = productDoc.data().stock

            if (currentStock >= item.quantity) {
                await updateDoc(docRef, {
                  stock: currentStock - item.quantity
                });
                console.log(`Stock actualizado de ${item.id}: ${currentStock - item.quantity}`);
              } else {
                console.error(`Stock insuficiente para el producto con ID: ${item.id}`);
              }
        }
        const order = {
            buyer: user,
            cart: cart,
            total: totalPrice(),
            fecha: Timestamp.now()
        }
        const orderRef = await addDoc(dbRef, order)
            Swal.fire({
                title: "¡Gracias por confiar en nosotros, Que lo disfrutes!",
                text: `El número de tu orden es: ${orderRef.id}`,
                icon: "success",
                confirmButtonColor: "#7B341E",
                confirmButtonText: "Volver al inicio",
            }).then(() => {
                clearCart()
                router.push('/')
            })  

    } catch (error) {
        console.log(error)
        return
    }
  }

  return (
    <div>
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
            value={user.name}
            name="name"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pedro Báez"
          />
        </div>
        <div className="mb-5">
          <label
            type="label"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Correo Electrónico:
          </label>
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="pedrobaez@gmail.com"
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repetir Correo Electrónico:
          </label>
          <input
            type="email"
            value={user.repeatedEmail}
            name="repeatedEmail"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="pedrobaez@gmail.com"
          />
        </div>
        <div className="mb-5">
          <label
            type="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Número de Teléfono:
          </label>
          <input
            type="text"
            value={user.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="261111111"
          />
        </div>
        <div className="mb-5">
            <button 
                type="button"
                onClick={getOrder}
                className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-ourpink-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
            >
                Finalizar Compra
            </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

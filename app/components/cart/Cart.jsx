"use client";
import { useCartContext } from "@/app/Context/CartContext";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import SecondaryButton from "../ui/Buttons/SecondaryButton";
import useCostTransform from "@/app/hooks/useCostTransform";
import CartSvg from "../icons/CartSvg";

const Cart = () => {
  const { costTransform } = useCostTransform();

  const {
    cart,
    addToCart,
    isInCart,
    clearCart,
    totalPrice,
    getQuantity,
    removeItem,
    decrementItem,
    incrementItem,
    currentQuantity,
  } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-start items-center my-46 md:my-48">
        <div className="flex"></div>
        <div className="flex flex-col items-center gap-2 md:gap-6">
          <CartSvg className={"fill-ourpink-light dark:fill-ourpink-dark size-36 md:size-56"} />
          <h1 className="text-black dark:text-white font-bold text-2xl md:text-5xl">No tienes items en tu carrito</h1>
          <h2 className="text-slate-800 dark:text-slate-300 xs:text-md text-lg md:text-2xl">Intenta añadiendo alguno de nuestros cursos</h2>
          <PrimaryButton label={'Encontrá tu curso'} link={'/products'}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto h-screen flex flex-col md:flex-row gap-4 gap-16 md:justify-center mt-4 md:mt-16">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold my-4">
            Items en el Carrito
          </h1>
          {console.log(cart)}
          {cart.map((prod) => {
            console.log(prod);
            return (
              <div key={prod.id} className="bg-background-transparent border-b-2 dark:border-0 dark:bg-background-dark rounded-lg grid grid-cols- md:grid-cols-4 h-fit items-center justify-items-center px-4 my-2 md:my-4">
                <picture className="m-4">
                  <Image
                    src={prod.img}
                    width={58}
                    height={48}
                    alt={prod.name}
                  />
                </picture>
                <h2 className="text-md md:text-xl uppercase font-bold">
                  {prod.name}
                </h2>
                <h3>Cantidad: {prod.quantity}</h3>
                <h3>Total: {costTransform(prod.price)}</h3>
              </div>
            );
          })}
        </div>
        <div className="bg-background-light dark:bg-background-dark rounded-lg flex flex-col h-fit px-4 md:px-8 py-4 md:py-8 items-center justify-items-center gap-4">
          <h2 className="text-2xl md:text-4xl">Resumen de Compra</h2>
          <h3 className="text-lg md:text-xl">
            Cantidad de productos: {getQuantity()}
          </h3>
          <h3 className="text-lg md:text-xl font-semibold">
            {costTransform(totalPrice())}
          </h3>
          <div className="flex flex-col w-full gap-4">
            <PrimaryButton label={"Continuar con la compra"} link={""} />
            <SecondaryButton
              label={"Vaciar Carrito"}
              link={""}
              handleEvent={clearCart}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;

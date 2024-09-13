import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import StockCounter from "../../Counter/StockCounter";
import useCostTransform from "@/app/hooks/useCostTransform";
import { useCartContext } from "@/app/Context/CartContext";
import { useRouter } from "next/navigation";
import { FaCheck, FaCross } from "react-icons/fa";
import SecondaryButton from "../Buttons/SecondaryButton";
import PrimaryButton from "../Buttons/PrimaryButton";

const ItemDetail = ({
  name,
  img,
  price,
  lgDescription,
  id,
  stock,
  currentQuantity,
}) => {
  const [cantidad, setCantidad] = useState(0);
  const { costTransform } = useCostTransform();
  const { addToCart } = useCartContext();
  const router = useRouter();
  const maxAvailable = stock - currentQuantity;

  const onAdd = (quantity) => {
    const item = {
      id,
      name,
      price,
      img,
      stock,
    };
    addToCart(item, quantity);
    toast.success(
      quantity == 1
        ? `Agregaste ${quantity} unidad`
        : `Agregaste ${quantity} unidades`,
      {
        action: {
          label: "Ver Producto",
          onClick: () => router.push("/cart"),
        },
      }
    );
    setCantidad(quantity);
  };

  return (
    <article className="max-w-xs md:max-w-6xl bg-white border border-gray-200 rounded-2xl shadow dark:bg-background-dark dark:border-gray-900">
      <Toaster richColors expand={false} />
      <div className="flex flex-col md:flex-row">
        <div className="pt-8 md:pl-16 flex justify-center items-center">
          <Image
            src={img}
            width={244}
            height={244}
            style={{ maxHeight: "644px", maxWidth: "644px" }}
            alt={name}
          />
        </div>
        <div className="p-8 md:p-16">
          <Link href="#">
            <h1 className="mb-2 text-2xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-ourpink-dark">
              {name}
            </h1>
          </Link>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
            {lgDescription}
          </p>
          <p className="mb-3 text-3xl md:text-5xl font-semibold text-ourpink-light dark:text-white">
            {price !== undefined
              ? costTransform(price)
              : "Precio no disponible"}
          </p>
          {currentQuantity > maxAvailable ? (
            <div className="flex flex-col gap-2">
              <div className="mx-2 flex items-center justify-center">
                <FaCross
                  className="text-[#14991e] dark:text-[#baff94]"
                  size={"3vh"}
                />
                <p className="font-bold text-lg px-2 py-2 text-black dark:text-[#baff94]">
                  No puedes agregar más items
                </p>
              </div>
              <SecondaryButton label={"Regresar"} link={"/"} />
            </div>
          ) : cantidad > 0 ? (
            <div className="flex flex-col gap-2">
              <div className="mx-2 flex items-center justify-center">
                <FaCheck
                  className="text-[#14991e] dark:text-[#baff94]"
                  size={"3vh"}
                />
                <p className="font-bold text-lg px-2 py-2 text-[#14991e] dark:text-[#baff94]">
                  Has agregado correctamente al carrito
                </p>
              </div>
              <SecondaryButton label={"Ir al carrito"} link={"/cart"} />
              <PrimaryButton label={"Seguir comprando"} link={"/products"} />
            </div>
          ) : (
            <StockCounter
              stock={stock}
              initialValue={1}
              onAdd={onAdd}
              maxAvailable={maxAvailable}
            />
          )}
          {currentQuantity === 0 ? (
            ""
          ) : (
            <span className="mt-4 flex text-2xl justify-center">
              Cantidad en el carrito: {currentQuantity}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;

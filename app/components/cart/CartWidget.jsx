import { useCartContext } from "@/app/Context/CartContext";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartWidget = () => {
  const { getQuantity } = useCartContext();

  return (
    <div className="flex aspect-square items-center justify-center rounded-full px-2 py-2 border-2 bg-background-dark border-slate-600">
      <Link href={"/cart"}>
        {getQuantity() > 0
        ?
          <li className="font-sans block mt-4 lg:inline-block lg:mt-0 align-middle text-black hover:text-gray-700">
            <a href="/cart" role="button" className="relative flex">
              <div className="flex justify-center">
                <FaCartPlus size={32} color="#ffffff" />
              </div>
              <span className="absolute top-0 right-3 -mr-6">
                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  {getQuantity() > 0 && getQuantity()}
                </div>
              </span>
            </a>
          </li>
        :
          <FaCartPlus size={32} color="#ffffff" />
        }
      </Link>
    </div>
  );
};

export default CartWidget;

import React from "react";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebaseConfig";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import DeleteProductButton from "./DeleteProductBtn";

const getAllProducts = async () => {
  const productRef = collection(db, "productos");
  const querySnapshot = await getDocs(productRef);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

const ProductsTable = async () => {
  const items = await getAllProducts();

  return (
    <div className="overflow-x-auto bg-background-dark rounded-xl p-8">
      <div className="space-x-2 flex bg-transparent">
        <PrimaryButton link={"/admin/create"} label={"Añadir un producto"} />
        <button
          type="button"
          className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-ourpink-light/80 dark:text-white rounded-lg border-2 border-ourpink-light/80 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent dark:border-2 dark:border-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
        >
          Ver órdenes
        </button>
      </div>
      <table className="w-full mt-5 rounded-md bg-transparent text-xs lg:text-sm text-left text-gray ">
        <thead className="text-base text-gray uppercase ">
          <tr>
            <th scope="col" className="px-3 py-2">
              Name
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Price
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Stock
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Type
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Image
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Id
            </th>
            <th scope="col" className="px-3 py-2">
              Description
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="p-2 truncate text-lg"> {item.name}</td>
              <td className="p-2 text-center">$ {item.price}</td>
              <td className="p-2 text-center">{item.stock}</td>
              <td className="p-2 text-center">{item.category}</td>
              <td className="p-2 text-center">
                {item.img ? (
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={80}
                    height={80}
                    blurDataURL="data:..."
                    placeholder="blur"
                  />
                ) : (
                  <>
                    <p className="text-gray">no image </p>
                  </>
                )}
              </td>
              <td className="p-2 text-center">{item.id}</td>
              <td className="p-2 truncate max-w-prose">{item.description}</td>
              <td className="flex space-x-3 justify-center">
                <Link href={`/admin/edit/${item.id}`}>
                  <FaRegEdit className="text-gray text-xl " />
                </Link>
                <DeleteProductButton id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;

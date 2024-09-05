import React from "react";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebaseConfig";

const getAllProducts = async () => {
  const productRef = collection(db, "productos");
  const querySnapshot = await getDocs(productRef);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

const ProductsTable = async () => {
  const items = await getAllProducts();

  return (
    <div className="overflow-x-auto">
      <div className="space-x-2 flex">
        <PrimaryButton link={"/admin/create"} label={"Añadir un producto"} />
        <button
          type="button"
          className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-ourpink-light/80 dark:text-white rounded-lg border-2 border-ourpink-light/80 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent dark:border-2 dark:border-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
        >
          Ver órdenes
        </button>
      </div>
    </div>
  );
};

export default ProductsTable;

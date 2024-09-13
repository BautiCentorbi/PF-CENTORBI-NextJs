import { NextResponse } from "next/server";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/config/firebaseConfig";

export async function PUT(request, { params }) {
  const { id } = params;
  const productData = await request.json();

  try {
    const productRef = doc(db, "productos", id);
    await updateDoc(productRef, productData);
    return NextResponse.json({ message: "Producto actualizado exitosamente" });
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar el producto" }, { status: 500 });
  }
}
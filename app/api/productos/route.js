import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebaseConfig";

export async function GET(request) {
    const productsRef = collection(db, 'productos')
    
    try {
        console.log('Fetching Products from Firebase')
        const querySnapshot = await getDocs(productsRef)
        console.log('Products Fetched Succesfully')
        
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        return NextResponse.json(products)
    } catch (error) {
        console.error("Error fetching products: ", error)
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
    }
} 
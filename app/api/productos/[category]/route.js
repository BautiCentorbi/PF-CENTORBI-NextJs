import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/config/firebaseConfig";

export async function GET(request, { params }) {
    const { category } = params;
    const productsRef = collection(db, 'productos');

    try {
        let q;
        if (category) {
            q = query(productsRef, where('category', '==', category));
        } else {
            q = productsRef;
        }

        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        if (!Array.isArray(products)) {
            throw new Error('Products is not an array');
        }

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

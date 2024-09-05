import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/Semantic/NavBar";
import Footer from "./components/ui/Semantic/Footer";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: 'NextCurs - Tu manera de aprender',
  description: 'Página creada a modo de playground para ir probando las herramientras aprendidas durante la cursada sin afectar al proyecto final',
  keywords: 'next, react, playground, coderhouse, course',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <NavBar/>
            {children}
            <Footer/>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

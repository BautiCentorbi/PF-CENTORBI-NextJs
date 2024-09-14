import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/Semantic/NavBar";
import Footer from "./components/ui/Semantic/Footer";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'NextCurs - Tu manera de aprender',
  description: 'Descubre nuestra plataforma de aprendizaje en línea, donde no solo vendemos cursos, sino que ofrecemos experiencias de aprendizaje transformadoras. Con una amplia variedad de temas y niveles, nuestros cursos están diseñados para ayudarte a alcanzar tus metas personales y profesionales. Únete a nuestra comunidad y comienza tu viaje de aprendizaje hoy mismo.',
  keywords: 'next, react, ecommerce, coderhouse, course, learning, education, selling, online, coaching, free, knowledge, freelancer',
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
        <SpeedInsights />
      </body>
    </html>
  );
}

"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MainLogo from "../../icons/MainLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CartWidget from "../../cart/CartWidget";

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Productos",
      href: "/products",
    },
    {
      label: "Nosotros",
      href: "/about",
    },
  ]
  
  const pathname = usePathname()
  useEffect(() =>{
    setNav(false)
  }, [pathname])

  return (
    <nav className="bg-currentColor flex justify-between items-center h-24 md:max-w-[1920px] md:mx-40 lg:mx-70 px-4 text-white">
      <Link href={'/'}>
        <MainLogo className="text-ourpink-light dark:text-white w-24 h-16 md:w-40 md:h-16" />
      </Link>
    
    {/* Desktop Nav */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={`${pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? 'rounded-none border-ourpink-dark border-b-2 hover:border-0 hover:rounded-xl' : ''} px-4 py-2 text-black font-medium text-xl hover:text-white hover:bg-ourpink-light dark:text-white dark:hover:bg-ourpink-dark rounded-xl m-2 cursor-pointer duration-300 dark:hover:text-black hover:font-semibold`}>
            {item.label}
          </Link>
        ))}
      </ul>

      <CartWidget />

      {/* Drawer Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose className="text-black dark:text-white" size={24} /> : <AiOutlineMenu className="text-black dark:text-white" size={24} />}
      </div>

      {/* Mobile Nav */}
      <ul className={`${nav ? 'z-50 md:hidden flex flex-col fixed left-0 top-0  h-full border-r border-r-gray-900 bg-background-dark ease-in-out duration-500' : 'flex flex-col ease-in-out  duration-500 fixed top-0 bottom-0 left-[-100%]'} w-[200px]`}>
        <Image
          src={"/images/MainLogo.png"}
          height={144}
          width={144}
          alt="Next Curs Main Logo"
        />
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={`${pathname === item.href ? 'bg-ourpink-light' : ''} p-4 border-b rounded-t-xl hover:bg-ourpink-dark duration-300 hover:text-black cursor-pointer border-gray-600`}>
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
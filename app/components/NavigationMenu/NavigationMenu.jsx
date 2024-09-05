'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { db } from '@/app/config/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const NavigationMenu = () => {
  const pathname  = usePathname()
  const [ categories, setCategories ] = useState([])
  const [toggleOpen, setToggleOpen] = useState(false);

  useEffect(() => {
    const loadCategories = async() => {
      const fetchedCategories = await fetchCategories()
      setCategories(fetchedCategories)
    }
    loadCategories()
  }, [])

  useEffect(() => {
    setToggleOpen(false)
  }, [pathname])

  const fetchCategories = async () => {
    const querySnapshot = await getDocs(collection(db, 'productos'))
    const categories = querySnapshot.docs.map(doc => doc.data().category)
    return[...new Set(categories)]
  }

  return (
    <div className="mt-4 mb-8">
      {/* Dropdown for mobile */}
      <div className="md:hidden relative">
        <button onClick={() => setToggleOpen(!toggleOpen)} className="flex flex-row justify-center items-center gap-4 transition mr-auto px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-ourpink-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400 w-80">
            Categorías
            {
                toggleOpen ?
                <FaChevronUp />
                :
                <FaChevronDown />
            }
        </button>
        {toggleOpen && (
          <div
            className={`transition-transform duration-300 ease-in-out ${
              toggleOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            } mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
          >
            <ul>
              <li className="block px-4 py-2 text-black dark:text-white">
                <Link
                  className={`${
                    pathname === "/products"
                      ? "bg-ourpink-light text-white"
                      : ""
                  }`}
                  href="/products"
                >
                  Todos
                </Link>
              </li>
              {categories.map((category, index) => {
                const categoryPath = `/products/${category.toLowerCase()}`;
                return (
                  <li
                    key={index}
                    className="block px-4 py-2 text-black dark:text-white"
                  >
                    <Link
                      className={`${
                        pathname === categoryPath
                          ? "bg-ourpink-light text-white"
                          : ""
                      } uppercase`}
                      href={categoryPath}
                    >
                      {category.replaceAll("-", " ")}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* List for desktop */}
      <ul className="hidden md:flex flex-row gap-8 px-16 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-full">
        <li
          className={`text-black dark:text-white uppercase px-4 py-1 rounded-lg ${
            pathname === "/products" ? "bg-ourpink-light text-white" : ""
          }`}
        >
          <Link href="/products">Todos</Link>
        </li>
        {categories.map((category, index) => {
          const categoryPath = `/products/${category}`;
          return (
            <li
              key={index}
              className={`transition text-black dark:text-white uppercase px-4 py-1 rounded-lg hover:text-ourblue-light dark:hover:text-ourblue-dark ${
                pathname === categoryPath ? "bg-ourpink-light text-white" : ""
              }`}
            >
              <Link className="uppercase" href={categoryPath}>
                {category?.replaceAll("-", " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationMenu;

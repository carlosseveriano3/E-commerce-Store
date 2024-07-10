'use client'

import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FavoriteProductsContext } from "@/context/favorite-products-context"
import dynamic from "next/dynamic"
import cardImages from "../card-images"
import { getProductsById } from "@/lib/products"

import CartBlack from '../../../public/assets/Cart-Black.svg';
import { X } from "lucide-react"

const FavoriteProducts = () => {
  const { favoriteProducts, setFavoriteProducts } = useContext(FavoriteProductsContext);
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {

      setIsLoading(true)

      const { product, error } = await getProductsById(favoriteProducts)
    }
  }, [])

  const books = cardImages.filter((book) => favoriteBooks.includes(book.id));

  function removeFromFavorites(id: string) {

    const newFavoriteBooks = favoriteProducts.filter((product) => product !== id);
    setFavoriteBooks(newFavoriteBooks);

    localStorage.setItem('favoriteBooks', JSON.stringify(newFavoriteBooks));
  }

  return(
    <div className="w-[87%] mx-auto my-3">

      <span className="text-lg font-semibold">Meus favoritos</span>

      <div 
        className="relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-2" 
        style={{
            transform: 'scale(1)'
         }}
      >
        {books.map(book => (
        <div key={book.id} 
          className="bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden group relative">

        <button 
          className="fixed translate-x-[140px] -translate-y-3 bg-red-500 rounded-full z-10"
          onClick={() => removeFromFavorites(book.id)}
        >
          <X className="size-7"
            color="black"
          />
        </button>
            
          <Link href={`/products/${book.id}`}>
            <Image 
              src={book.src}
              alt="image"
              width={300}
              height={300}
              className="hover:opacity-90"
            />
          </Link>

          <span className="text-sky-600 font-medium text-center block h-20 px-1">
            <Link href={`/products/${book.id}`}>
              {book.name}
            </Link>
          </span>

          <span className="text-black text-xl font-bold text-center block">
            R${book.price}
          </span>

          <div className="">  
            <Link href={`/products/${book.id}`} className="bg-lime-400 h-10 flex items-center justify-center gap-1 group">
              <Image 
                src={CartBlack}
                alt="cart-black"
                className="group-hover:size-[25px]"
              />
              <span className="text-lg font-medium text-black group-hover:text-[19px]">
                Comprar
              </span>
            </Link>
          </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(FavoriteProducts), {ssr: false})
'use client'

import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useContext, useEffect, useState } from "react"
import { FavoriteProductsContext } from "@/context/favorite-products-context"
import { getFavoriteProductsById } from "@/lib/products"
import { Products } from "@/lib/types"

import CartBlack from '../../../public/assets/Cart-Black.svg';
import { X } from "lucide-react"

// const FavoriteProducts = () => {
export default function FavoriteProducts() {

  const { favoriteProductsId, setFavoriteProductsId } = useContext(FavoriteProductsContext);
  const [ favoriteProducts, setFavoriteProducts ] = useState<Products[] | {}>()
  const [ isLoading, setIsLoading ] = useState(false)

  console.log(favoriteProducts)

  useEffect(() => {
    const fetchProduct = async () => {

      setIsLoading(true);

      if (favoriteProductsId) {
        const res = await Promise.all (
          favoriteProductsId.map((id) => getFavoriteProductsById(id)) 
        )
        if (!res) {
          throw new Error('Failed in fetch products!');
        }
        setFavoriteProducts(res.map((res) => res.product))
      }

      
      // console.log(product);
      console.log(favoriteProductsId)
      // setFavoriteProductsId(product);

      setIsLoading(false);
    }

    fetchProduct()
  }, [])

  // const books = cardImages.filter((book) => favoriteProductsId.includes(book.id));

  function removeFromFavorites(id: string) {

    const newFavoriteBooks = favoriteProductsId.filter((product) => product !== id);
    setFavoriteProductsId(newFavoriteBooks);

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
        
        {favoriteProducts?.map(products => (
        <div key={products.id} 
          className="bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden group relative">

        <button 
          className="fixed translate-x-[140px] -translate-y-3 bg-red-500 rounded-full z-10"
          onClick={() => removeFromFavorites(products.id)}
        >
          <X className="size-7"
            color="black"
          />
        </button>
            
          <Link href={`/products/${products.id}`}>
            <Image 
              src={products.thumbnail}
              alt="image"
              width={300}
              height={300}
              className="hover:opacity-90"
            />
          </Link>

          <span className="text-sky-600 font-medium text-center block h-20 px-1">
            <Link href={`/products/${products.id}`}>
              {products.title}
            </Link>
          </span>

          <span className="text-black text-xl font-bold text-center block">
            R${products.price}
          </span>

          <div className="">  
            <Link href={`/products/${products.id}`} className="bg-lime-400 h-10 flex items-center justify-center gap-1 group">
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

// export default dynamic (() => Promise.resolve(FavoriteProducts), {ssr: false})
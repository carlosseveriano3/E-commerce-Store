'use client'

import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useContext, useEffect, useState } from "react"
import { FavoriteProductsContext } from "@/context/favorite-products-context"
import { getProductById } from "@/lib/products"
import { Products } from "@/lib/types"
import LoadingSingleProduct from "@/components/loadings/loadingSingleProduct"

import CartBlack from '../../../public/assets/Cart-Black.svg';
import { X } from "lucide-react"
import { toast } from "sonner"

// type FavoriteProducts =  {
//   products: Products[]
// }

// const FavoriteProducts = () => {

export default function FavoriteProducts() {

  const { favoriteProductsId, setFavoriteProductsId } = useContext(FavoriteProductsContext);
  const [ favoriteProducts, setFavoriteProducts ] = useState<Array<Products | null> | any[]>();
  const [ isLoading, setIsLoading ] = useState(false)

  console.log(favoriteProductsId)

  // ver a parte do componente Await do next-navigation

  useEffect(() => {
    const fetchProducts = async () => {

      setIsLoading(true);

      if (favoriteProductsId) {
        const res = await Promise.all (
          favoriteProductsId.map((id) => getProductById(id)) 
        )
        console.log(res)
          let products = res.map((res) => res.product)
          if (!products || products === null) {
            return
          }
          setFavoriteProducts(products)
      }

      
      // console.log(product);
      console.log(favoriteProductsId)
      // setFavoriteProductsId(product);

      setIsLoading(false);
    }

    fetchProducts();
  }, [favoriteProductsId])

  // const books = cardImages.filter((book) => favoriteProductsId.includes(book.id));

  function removeFromFavorites(id: string) {

    const newFavoriteBooks = favoriteProductsId.filter((product) => product !== id);
    setFavoriteProductsId(newFavoriteBooks);

    localStorage.setItem('favoriteProducts', JSON.stringify(newFavoriteBooks));

    toast.success('Produto removido com sucesso!')
  }

  return(
    <div className="w-[87%] xl:w-[75%] mx-auto my-3">

      <span className="text-lg font-semibold">Meus favoritos</span>

      {isLoading && <LoadingSingleProduct />}

      <div 
        className=" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-2" 
        
      >
       {favoriteProducts != null && ( 
        <>
        {favoriteProducts?.map(products => (
        <div key={products.id} 
          className="relative bg-white space-y-2 py-1 pb-0 rounded-md group">

        <button 
          className=" bg-red-500 rounded-full absolute -right-3 -top-3"
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
            <Link href={`/products/${products.id}`} className="bg-lime-400 h-10 flex items-center justify-center gap-1 rounded-b-lg group">
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
        </>
      )}
      </div>
    </div>
  )
}

// export default dynamic (() => Promise.resolve(FavoriteProducts), {ssr: false})
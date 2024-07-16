'use client'

import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MyProductsContext } from "@/context/my-products-context"
import dynamic from "next/dynamic"
import { getProductById } from "@/lib/products"
import { Products } from "@/lib/types"
import LoadingSingleProduct from "@/components/loadings/loadingSingleProduct"

import CartBlack from '../../../public/assets/Cart-Black.svg';
import FavoritesBlack from '../../../public/assets/Favorites-Black.svg';

const MyProducts = () => {
  const { myProductsId } = useContext(MyProductsContext);
  const [ myProducts, setMyProducts ] = useState<Array<Products | null> | any[]>();
  const [ isLoading, setIsLoading ] = useState(false);

  console.log(myProducts)

  function notNull<Products>(val: Products | null): val is Products {
    return val !== null;
  }

  useEffect(() => {
    const fetchProducts = async () => {

      setIsLoading(true);

      if (myProductsId) {
        const res = await Promise.all (
          myProductsId.map((id) => getProductById(id))
        );
        if (!res || res == null) {
          return
        }
        let products = res.map((res) => res.product)
        setMyProducts(products)
      }
      setIsLoading(false);
    }

    fetchProducts();
  }, [myProductsId])

  if (!myProducts) {
    return
  }

  return(
    <div className="w-[87%] mx-auto my-3">

      <span className="text-lg font-semibold">Meus produtos</span>

      {isLoading && <LoadingSingleProduct />}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-2">
      {myProducts && (
      <>
        {myProducts.map(product => (
        <div key={product.id} className="bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
            
          <Link href={`/products/${product.id}`}>
            <Image 
              src={product.thumbnail}
              alt="image"
              width={300}
              height={300}
              className="hover:opacity-90"
            />
          </Link>

          <span className="text-sky-600 font-medium text-center block h-20 px-1">
            <Link href={`/products/${product.id}`}>
              {product.title}
            </Link>
          </span>
            
          </div>
        ))}
      </>
      )}
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(MyProducts), {ssr: false})
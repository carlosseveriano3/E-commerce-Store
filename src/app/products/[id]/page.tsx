'use client'

import Image from "next/image"
import Link from "next/link";
import { MyProductsContext } from "@/context/my-products-context";
import { useContext, useState, useEffect } from "react";
import { Products } from "@/lib/types";
import { getProductById } from "@/lib/products";
import LoadingSingleProduct from "@/components/loadings/loadingSingleProduct";
import { toast } from "sonner";

import Tabs from "@/components/Tabs"
import CartBlack from '../../../../public/assets/Cart-Black.svg';

export default function Product ({
  params: {id},
}: {
  params: {id: string}; 
}) {
  const { myProductsId, setMyProductsId } = useContext(MyProductsContext);
  const [ singleProduct, setSingleProduct ] = useState<Products>()
  const [ isLoading, setIsLoading ] = useState(false);

  console.log(singleProduct)

  useEffect(() => {
    const fetchProduct = async () => {

      setIsLoading(true);

      const { product, error } = await getProductById(id);
      if (!product || error) {
        console.log(error);
        return
      }
      setSingleProduct(product);

      setIsLoading(false);
    }

    fetchProduct();
  }, [])

  function addToMyProducts(id: string) {
    const newProducts = [...myProductsId, id];

    setMyProductsId(newProducts);

    localStorage.setItem('myProducts', JSON.stringify(newProducts));

    toast.success('Compra efetuada! Pedido adicionado ao "Meus Produtos"!')
  }
  
  return(

    <>
    {isLoading && <LoadingSingleProduct />}
    {singleProduct && (
    <div className="min-h-screen w-[90%] md:w-10/12 lg:w-7/12 mx-auto my-3 md:grid md:grid-cols-2 lg:translate-x-7">
      <div className="">
        <div className="bg-white md:my-auto py-1 flex justify-center">
            <Image 
            src={singleProduct.thumbnail}
            alt={singleProduct.title}
            width={300}
            height={300}
          />
        </div>

        <div className="flex justify-center md:col-start-1">
          <Tabs product={singleProduct}/>
        </div>
      </div>

      <div className="flex flex-col justify-center md:mt-7 md:ml-2 md:grid md:col-start-2 md:row-start-1 md:row-span-2 space-y-2 md:h-2/6">
        <div className="text-4xl">
          {singleProduct.title}
        </div>
        <div className="font-light">
          <span>Marca: {singleProduct.brand}</span>
        </div>
        <div className="font-light md:-translate-y-2">
          <span>Categoria: {singleProduct.category}</span>
        </div>
        <div className="font-light">
          <span>Avaliação: {singleProduct.rating}</span>
        </div>
        <div className="font-semibold text-3xl">
          <span>R$ {singleProduct?.price}</span>
        </div>

        <div className="">
          <Link href={`/`} className="bg-amber-400 mb-2 rounded-md h-10 flex items-center justify-center gap-1 w-4/4 group">
            <Image 
              src={CartBlack}
              alt="cart-black"
              className="group-hover:size-[25px]"
            />
            <span className="text-lg font-medium text-black group-hover:text-[19px]">
              Adicionar ao carrinho
            </span>
          </Link>

          <button 
            className="bg-amber-400 rounded-md h-10 flex items-center justify-center gap-1 w-[100%] group"
            onClick={() => addToMyProducts(singleProduct.id)}  
          >
            <span className="text-lg font-medium text-black group-hover:text-[19px]">
              Comprar
            </span>
          </button>
        </div>

      </div>
    </div>
    )}
    </>
  )
}

// export default dynamic (() => Promise.resolve(Product), {ssr: false})
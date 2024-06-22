import Image from "next/image"
import Link from "next/link";

import cardImages, { CardImages } from "../../../app/card-images"
import Tabs from "@/components/Tabs"
import CartBlack from '../../../../public/assets/Cart-Black.svg';

export default function BookView({
  params: {bookView},
}: {
  params: {bookView: string}; 
}) {
  const books: CardImages = cardImages.find((book) => book.id === bookView)!;
  
  return(

    <div className="w-[90%] md:w-10/12 lg:w-7/12 mx-auto my-3 md:grid md:grid-cols-2 lg:translate-x-7">
      <div className="">
        <div className="bg-white md:my-auto py-1 flex justify-center">
          <Image 
            src={books.src}
            alt={books.name}
          />
        </div>

        <div className="flex justify-center md:col-start-1">
          <Tabs books={books}/>
        </div>
      </div>

      <div className="flex flex-col justify-center md:mt-7 md:ml-2 md:grid md:col-start-2 md:row-start-1 md:row-span-2 space-y-2 md:h-2/6">
        <div className="text-4xl">
          {books.name}
        </div>
        <div className="font-light">
          {books.author}
        </div>
        <div className="font-light md:-translate-y-2">
          {books.publishingCompany}
        </div>
        <div className="font-light">
          <span>Data de lançamento: {books.lauchingData}</span>
        </div>
        <div className="font-semibold text-3xl">
          <span>R$ {books.price}</span>
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

          <Link href={`/`} className="bg-amber-400 rounded-md h-10 flex items-center justify-center gap-1 w-4/4 group">
            <span className="text-lg font-medium text-black group-hover:text-[19px]">
              Comprar
            </span>
          </Link>
        </div>

      </div>
    </div>
  )
}
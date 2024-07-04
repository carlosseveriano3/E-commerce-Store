'use client'

import Image from "next/image"
import Link from "next/link";
import { MyBookshelfContext } from "@/context/bookshelf-context";
import { useContext } from "react";
import dynamic from "next/dynamic";

import cardImages, { CardImages } from "../../../app/card-images"
import Tabs from "@/components/Tabs"
import CartBlack from '../../../../public/assets/Cart-Black.svg';

const BookView = ({
  params: {bookView},
}: {
  params: {bookView: string}; 
}) => {
  const { bookshelf, setBookshelf } = useContext(MyBookshelfContext);
  
  const books: CardImages = cardImages.find((book) => book.id === bookView)!;

  function addToBookshelf(id: string) {
    const newBookshelf = [...bookshelf, id];

    setBookshelf(newBookshelf);

    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  }
  
  return(

    <div className="min-h-screen w-[90%] md:w-10/12 lg:w-7/12 mx-auto my-3 md:grid md:grid-cols-2 lg:translate-x-7">
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

          <button 
            className="bg-amber-400 rounded-md h-10 flex items-center justify-center gap-1 w-[100%] group"
            onClick={() => addToBookshelf(books.id)}  
          >
            <span className="text-lg font-medium text-black group-hover:text-[19px]">
              Comprar
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(BookView), {ssr: false})
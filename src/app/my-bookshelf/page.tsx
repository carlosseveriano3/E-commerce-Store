'use client'

import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { MyBookshelfContext } from "@/context/bookshelf-context"
import dynamic from "next/dynamic"
import cardImages from "../card-images"

import CartBlack from '../../../public/assets/Cart-Black.svg';
import FavoritesBlack from '../../../public/assets/Favorites-Black.svg';

const MyBookshelf = () => {
  const { bookshelf } = useContext(MyBookshelfContext);

  const books = cardImages.filter((book) => bookshelf.includes(book.id));

  return(
    <div className="w-[87%] mx-auto my-3">

      <span className="text-lg font-semibold">Minha estante de livros</span>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-2">
        {books.map(book => (
        <div key={book.id} className="bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
            
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
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(MyBookshelf), {ssr: false})
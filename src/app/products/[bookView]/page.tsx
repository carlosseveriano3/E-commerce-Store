import Image from "next/image"

import cardImages, { CardImages } from "../../../app/card-images"
import Tabs from "@/components/Tabs"

export default function BookView({
  params: {bookView},
}: {
  params: {bookView: string}; 
}) {
  const books: CardImages = cardImages.find((book) => book.id === bookView)!;
  
  return(

    <div className="border-2 border-red-600 w-[90%] mx-auto my-3">

      <div className="bg-white py-1 flex justify-center">
        <Image 
          src={books.src}
          alt={books.name}
        />
      </div>

      <div className="flex justify-center">
        <Tabs books={books}/>
      </div>

      <div className="flex justify-center">
        Parte de compra
      </div>

    </div>
  )
}
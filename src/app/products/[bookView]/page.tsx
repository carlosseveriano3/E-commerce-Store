import Image from "next/image"

import cardImages, { CardImages } from "../../../app/card-images"
import Tabs from "@/components/Tabs"

export default function BookView({
  params: {bookView},
}: {
  params: {bookView: string}; 
}) {
  const books: CardImages = cardImages.find((book) => book.id === bookView)!;

  function handleCurrentTab(currentTab: any) {
    let menuClasses: string[] = [];

    if (currentTab === "1") {
      menuClasses = [
        "border-2"
      ]
    }

    return menuClasses
  }
  
  return(

    <div className="w-[90%] mx-auto my-3 md:grid md:grid-cols-2 md:grid-rows-2">

      <div className="bg-white py-1 flex justify-center">
        <Image 
          src={books.src}
          alt={books.name}
        />
      </div>

      <div className="flex justify-center md:col-start-1">
        <Tabs books={books}/>
      </div>

      <div className="flex flex-col justify-center md:col-start-2 space-y-1">
        <div className="text-4xl">
          {books.name}
        </div>
        <div className="font-light translate-y-1">
          {books.author}
        </div>
        <div className="font-light">
          {books.publishingCompany}
        </div>
        <div className="font-light translate-y-1">
          <span>Data de lançamento:</span> {books.lauchingData}
        </div>
        <div className="font-semibold translate-y-2 text-2xl">
          <span>R$</span> {books.price}
        </div>
      </div>

    </div>
  )
}
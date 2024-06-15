import Image from "next/image"

import cardImages from "../../app/card-images"
import Tabs from "@/components/Tabs"

export default function BookView({
  params: {bookView},
}: {
  params: {bookView: string}; 
}) {
  console.log(bookView)
  
  return(
    <div className="border-2 border-red-600 w-[90%] mx-auto my-3">

      <div className="bg-white py-1 flex justify-center">
        {/* <Image 
          src={}
          alt="Turma da Mônica"
        /> */}
      </div>

      <div className="flex justify-center">
        <Tabs />
      </div>

      <div className="flex justify-center">
        Parte de compra
      </div>

    </div>
  )
}
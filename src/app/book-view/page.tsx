import Image from "next/image"

import livro from "../../../public/card-images/1.jpg"
import Tabs from "@/components/Tabs"

export default function BookView() {
  return(
    <div className="border-2 border-red-600 w-[90%] mx-auto my-3">

      <div className="bg-white py-1 flex justify-center">
        <Image 
          src={livro}
          alt="Turma da Mônica"
        />
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
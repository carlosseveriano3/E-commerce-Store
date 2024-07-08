import { Suspense } from "react"
import { ImageSlider } from "../components/ImageSlider"
import  Carousel  from "@/components/Carousel"
// import Loading from "./loading"

export default function Home() {

  return (
    <div className="">
      <ImageSlider />

      <div className="mx-auto max-w-6xl my-3 px-5 flex flex-col gap-4">
        <div className="text-xl font-semibold">
            Os livros mais vendidos
        </div>
        <div className="relative">
            <Carousel category={"mobile-accessories"}/>
        </div>
        <div className="text-xl font-semibold">
            Os livros mais aguardados
        </div>
        <div className="relative">
          <Carousel category={"groceries"}/>
        </div>
        <div className="text-xl font-semibold">
            Novidades
        </div>
        <div className="relative">
        <Carousel category={"smartphones"}/>
        </div>
      </div>
      
    </div>
  )
}
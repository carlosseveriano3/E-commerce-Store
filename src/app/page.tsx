import { BestSellers } from "@/components/BestSellers"
import { ImageSlider } from "../components/ImageSlider"
import { MostAntecipated } from "@/components/MostAntecipated"
import { News } from "@/components/News"
import './globals.css'

export default function Home() {

  return (
    <div className="">
      <ImageSlider />

      <div className="mx-auto max-w-6xl my-3 px-5 flex flex-col gap-4">
        {/* <div className="text-xl font-semibold">
            Os livros mais vendidos
        </div>
        <div className="relative">
            <BestSellers />
        </div>
        <div className="text-xl font-semibold">
            Os livros mais aguardados
        </div>
        <div className="relative">
            <MostAntecipated />
        </div> */}
        <div className="text-xl font-semibold">
            Novidades
        </div>
        <div className="relative">
            <News />
        </div>
      </div>
      
    </div>
  )
}
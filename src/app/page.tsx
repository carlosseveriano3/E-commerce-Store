import { BestSellers } from "@/components/BestSellers"
import { ImageSlider } from "../components/ImageSlider"

export default function Home() {

  return (
    <div className="">
      <ImageSlider />

      <div className="mx-auto max-w-6xl my-3 px-5 flex flex-col gap-4">
        <div className="text-xl font-semibold">
            Livros mais vendidos
        </div>
        <div className="flex flex-row gap-4">
            <BestSellers />
            <BestSellers />
            <BestSellers />
            <BestSellers />
        </div>
      </div>
      
    </div>
  )
}
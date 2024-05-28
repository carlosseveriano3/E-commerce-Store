'use client'

import Image from "next/image"
import { useState } from "react"
import { StaticImageData } from "next/image"

import banner1 from "../../public/banner-images/Banner_1.png"
import banner2 from "../../public/banner-images/Banner_2.jpg"
import banner3 from "../../public/banner-images/Banner_3.png"

import arrowLeft from "../../public/assets/Arrow-Left.svg"
import arrowRight from "../../public/assets/Arrow-Right.svg"

export function ImageSlider() {

  type AllImages = {
    id: string
    src: StaticImageData
  }

  const slides: AllImages[] = [
    {
      id: "1",
      src: banner1
    },
    {
      id: "2",
      src: banner2
    },
    {
      id: "3",
      src: banner3
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return(
    <div className="overflow-hidden border-2 group relative">
      <div 
        className= {`flex transition ease-out duration-500`}
         style={{
           transform: `translateX(-${currentIndex * 100}%)`,
        }} 
      >
        {slides.map(slide => {
          return <Image key={slide.id} alt={`banner1${currentIndex}`} src={slide.src} />
        })}
        
      </div>
      <div className="sm:hidden md:hidden lg:hidden group-hover:block top-[95%] sm:top-[75%] md:top-[65%] lg:top-[50%] absolute -translate-x-0 -translate-y-10 lg:translate-y-[-50%] left-2 lg:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <Image 
          alt="arrowLeft"
          src={arrowLeft}
          className="size-3 sm:size-6 md:size-8 lg:size-16"
          onClick={prevSlide}
        />
      </div>
      <div className="sm:hidden md:hidden lg:hidden group-hover:block top-[95%] sm:top-[75%] md:top-[65%] lg:top-[50%] absolute -translate-x-0 -translate-y-10 lg:translate-y-[-50%] right-2 lg:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <Image 
          alt="arrowRight"
          src={arrowRight}
          className="size-3 sm:size-6 md:size-8 lg:size-16"
          onClick={nextSlide}
        />
      </div>
    </div>
  )
}

// lg:top-[250px] md:top-[190px]
'use client'

import Image from "next/image"
import { use, useState } from "react"

import banner1 from "../../public/banner-images/Banner_1.png"
import banner2 from "../../public/banner-images/Banner_2.jpg"
import banner3 from "../../public/banner-images/Banner_3.png"

import arrowLeft from "../../public/assets/Arrow-Left.svg"
import arrowRight from "../../public/assets/Arrow-Right.svg"

export function ImageSlider() {
  const slides = [
    {
      src: banner1
    },
    {
      src: banner2
    },
    {
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
    <div className="border-2 border-white w-full h-[61px] md:h-[122px] lg:h-[242px] group">
      <div className="w-full h-full duration-500">
        <Image 
          alt="banner1"
          src={slides[currentIndex].src}
          className="duration-500"
        />
      </div>
      <div className="md:hidden lg:hidden group-hover:block absolute lg:top-[250px] md:top-[190px] -translate-x-0 -translate-y-10 lg:translate-y-[-50%] left-2 lg:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <Image 
          alt="arrowLeft"
          src={arrowLeft}
          className="size-3 md:size-7 lg:size-16"
          onClick={prevSlide}
        />
      </div>
      <div className="md:hidden lg:hidden group-hover:block absolute lg:top-[250px] md:top-[190px] -translate-x-0 -translate-y-10 lg:translate-y-[-50%] right-2 lg:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <Image 
          alt="arrowRight"
          src={arrowRight}
          className="size-3 md:size-7 lg:size-16"
          onClick={nextSlide}
        />
      </div>
    </div>
  )
}
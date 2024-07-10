"use client"

import CarouselItem from "./CarouselItems";
// import Loading from "../app/loading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//o global.css precisa vir depois dos arquivos do Slider

import '../app/globals.css'

export default function Carousel ({category} : {category: string}) {

// export default function Carousel ({category} : {category: string}) {

  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 352,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // console.log(allProducts)

  return (
    <div className="sm:mx-9 md:mx-12 lg:mx-12 
      744px:mx-16 581px:mx-4 613px:mx-1 717px:mx-10 604px:mx-3 636px:mx-1 751px:mx-10">
        {/* <Suspense key={Math.random()} fallback={<LoadingCarousel/>}> */}
          <CarouselItem 
            key={Math.random()}
            category={category}
          />
        {/* </Suspense> */}
    </div>
  )
}

// export default dynamic (() => Promise.resolve(Carousel), {ssr: false})
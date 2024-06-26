"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

import cardImages from "../../app/card-images"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//o global.css precisa vir depois dos arquivos do Slider
import '../../app/globals.css'

import CartBlack from '../../../public/assets/Cart-Black.svg';
import FavoritesBlack from '../../../public/assets/Favorites-Black.svg';

export function MostAntecipated() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5080,
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

  return (
    <div className="sm:mx-9 md:mx-12 lg:mx-12 xl:m-auto 
      744px:mx-16 581px:mx-4 613px:mx-1 717px:mx-10 604px:mx-3 636px:mx-1 751px:mx-10">
      {/* <div className="hover-container"></div> */}
      <Slider {...settings}>
      {cardImages.map(card => (
        <div key={card.id} className="bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
          
          <Link href={`/products/${card.id}`}>
            <Image 
              src={card.src}
              alt="image"
              width={300}
              height={300}
              className="hover:opacity-90"
            />
          </Link>

          <span className="text-sky-600 font-medium text-center block h-20 px-1">
            <Link href={`/products/${card.id}`}>
              {card.name}
            </Link>
          </span>

          <span className="text-black text-xl font-bold text-center block">
            R${card.price}
          </span>

          <div className="flex flex-row">  
            <Link href={`/products/${card.id}`} className="bg-lime-400 h-10 flex items-center justify-center gap-1 w-3/4 group">
                <Image 
                  src={CartBlack}
                  alt="cart-black"
                  className="group-hover:size-[25px]"
                />
                <span className="text-lg font-medium text-black group-hover:text-[19px]">
                  Comprar
                </span>
            </Link>

            <Link href="/" className="bg-slate-300 text-xl font-medium text-black flex justify-center items-center w-1/4 group">
                  <Image 
                    src={FavoritesBlack}
                    alt="FavoritesBlack"
                    className="group-hover:size-[27px]"
                  />
            </Link>
          </div>
          
        </div>
      ))}
      </Slider>
    </div>
  )
}
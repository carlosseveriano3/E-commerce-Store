import Link from "next/link"
import Image from "next/image"
import { useContext, useEffect, useState } from "react";
import { Products } from "@/lib/types"
import { FavoriteProductsContext } from "@/context/favorite-products-context";
import { getProductsCategory } from "@/lib/products";
import LoadingCarousel from "./loadings/LoadingCarousel";
import { toast } from "sonner";

import CartBlack from '../../public/assets/Cart-Black.svg';
import FavoritesBlack from '../../public/assets/Favorites-Black.svg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//o global.css precisa vir depois dos arquivos do Slider
import '../app/globals.css'

export default function CarouselItem({category}: {category: string}) {
  const { favoriteProductsId, setFavoriteProductsId } = useContext(FavoriteProductsContext);
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts ] = useState<Products[]>([])

  console.log(allProducts)

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

  useEffect(() => {
    const fetchProducts = async () => {

      setIsLoading(true);

        const { products, error } = await getProductsCategory(category);
        if (!products || error) {
          console.log(error)
          return
        }
        setAllProducts(products)

        setIsLoading(false)
      }

    fetchProducts();
  }, [])

  function addToFavoriteBooks(id: string) {
    const newFavoriteProduct = [...favoriteProductsId, id];

    setFavoriteProductsId(newFavoriteProduct);

    localStorage.setItem('favoriteProducts', JSON.stringify(newFavoriteProduct));
    
    toast.success('Produto adicionado aos favoritos')
  }

  return(
    <>
    {isLoading && <LoadingCarousel />}
    <Slider {...settings}>
      {allProducts?.map(product => (
        
          <div key={product.id} className="bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
                
            <Link href={`/products/${product.id}`}>
              <Image 
                src={product.thumbnail}
                alt="image"
                width={300}
                height={300}
                className="hover:opacity-90"
              />
            </Link>

            <span className="text-sky-600 font-medium text-center block h-20 px-1">
              <Link href={`/products/${product.id}`}>
                {product.title}
              </Link>
            </span>

            <span className="text-black text-xl font-bold text-center block">
              R${product.price}
            </span>

            <div className="flex flex-row">  
              <Link href={`/products/${product.id}`} className="bg-lime-400 h-10 flex items-center justify-center gap-1 w-3/4 group">
                <Image 
                  src={CartBlack}
                  alt="cart-black"
                  className="group-hover:size-[25px]"
                />
                <span className="text-lg font-medium text-black group-hover:text-[19px]">
                  Comprar
                </span>
              </Link>

              <button 
                className="bg-slate-300 text-xl font-medium text-black flex justify-center items-center w-1/4 group"
                onClick={() => addToFavoriteBooks(product.id)}
                >
                
                <Image 
                  src={FavoritesBlack}
                  alt="FavoritesBlack"
                  className="group-hover:size-[27px]"
                />
              </button>
            </div>
            
          </div>
        ))}
      </Slider>
    </>
  )
}
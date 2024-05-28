import Image from "next/image";
import Link from "next/link";

import CartBlack from '../../public/assets/Cart-Black.svg';
import FavoritesBlack from '../../public/assets/Favorites-Black.svg';

export function BestSellers() {
  return (
    <div className="">

      <div className="flex flex-row gap-5 justify-center sm:justify-start">
        <div className="bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
          <Link href="/">
            <Image 
              src={"https://leitura.com.br/image/cache/products/9788501117847-500x500.jpg"}
              alt="image"
              width={200}
              height={200}
              className="hover:opacity-90"
            />
          </Link>

          <span className="text-sky-600 font-medium text-center block">
            <Link href="/">
              Verity
            </Link>
          </span>

          <span className="text-black text-xl font-bold text-center block">
            R$42,20
          </span>

          <div className="flex flex-row">  
            <Link href="/" className="bg-lime-400 h-10 flex items-center justify-center gap-1 w-3/4 group">
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

      </div>

    </div>
  )
}
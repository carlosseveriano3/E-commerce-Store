'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


import Logo from '../../public/book.png'
import Menu from '../../public/assets/Menu.svg'
import User from '../../public/assets/User.svg'
import Favorites from '../../public/assets/Favorites.svg'
import Cart from '../../public/assets/Cart.svg'
import Search from '../../public/assets/Search.svg'
import Close from '../../public/assets/Close.svg'

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses: string[] = []

    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "bg-slate-600",
        "w-full",
        "p-4",
        "left-0",
        "flex-col",
        "items-center",
      ]
    }

    return menuClasses.join(" ")
  }

  return(
    <nav>
      <div className="bg-slate-600 w-full p-2 flex items-center justify-between sm:p-3">
          <button 
            className="ml-2 md:hidden"
            onClick={() => {
              setIsOpen(!isOpen)
            }}  
          >
            {isOpen ? (
              <Image src={Close} 
              alt="Close" 
              className="size-8"
              />
            ) : (
              <Image 
              src={Menu} 
              alt="Menu" 
              className="size-8"
              />
            )}
          </button>

        <div className="flex items-center gap-2">
          <div className="">
            <Image
            src={Logo}
            alt="logo"
            className="size-10"
            />
          </div>
          <div className="">
            <span className="font-bold text-2xl text-nowrap">Don't Panic!</span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="">
            <Image 
            src={User}
            alt="user"
            className="size-7"
            />
            <span className="hidden">entrar</span>
          </div>

          <div>
          <Image 
            src={Favorites}
            alt="user"
            className="size-7"
            />
            <span className="hidden text-center">favoritos</span>
          </div>

          <div className="mr-2">
          <Image 
            src={Cart}
            alt="user"
            className="size-7"
            />
            <span className="hidden">cesta</span>
          </div>
        </div>

      </div>

      <div className={`${isOpen ? "" : "bg-amber-400"} h-12 flex justify-center`}>
        
        <form className= "flex items-center focus-within:text-black md:absolute md:top-4 md:ml-10">
          <div className="relative text-black">
            <Image 
              src={Search}
              alt="search"
              className="absolute pointer-events-none my-1 right-3"
            />
            <input 
              type="text" 
              autoComplete="off" 
              placeholder="O que você procura?"
              className="px-3 py-[4px] w-[360px] outline-none rounded-md border-none 
              placeholder-gray-400 ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
        </form>

        <div className={`${getMenuClasses()} ${isOpen? "": "hidden"} space-y-6 md:w-full md:flex md:gap-6 md:justify-center md:space-y-0 md:items-center md:translate-x-16`}>
          <div className="flex flex-col space-y-6 -translate-x-16 md:space-y-0 md:flex-row md:gap-6 md:items-center">
            <Link href="/">Livros</Link>
            <Link href="/">Livros de domínio público</Link>
            <Link href="/">Categorias</Link>
            <Link href="/">Contato</Link>
          </div>
          
          <div className="-translate-x-[72px]">
            <span className=""><Link href="/">Minha estante de livros</Link></span>
          </div>
        </div>

      </div>

    </nav>
  )
}
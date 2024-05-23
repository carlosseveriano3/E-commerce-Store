'use client'

import Image from "next/image"
import Logo from '../../public/book.png'
import Menu from '../../public/assets/Menu.svg'
import User from '../../public/assets/User.svg'
import Favorites from '../../public/assets/Favorites.svg'
import Cart from '../../public/assets/Cart.svg'
import Search from '../../public/assets/Search.svg'

const navLinks = [
  {name: "Livros"},
  {name: "Livros de domínio público"},
  {name: "Categorias"},
  {name: "contato"}
]

export function Header() {

  function openMenu() {
    
  }

  return(
    <nav>
      <div className="bg-slate-600 p-2 flex items-center justify-between">
          <div className="ml-2">
            <Image 
            src={Menu}
            alt="Menu"
            className="size-8"
            onClick={openMenu}
            />
          </div>

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

        <div className="flex gap-2 mr-2">
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

          <div>
          <Image 
            src={Cart}
            alt="user"
            className="size-7"
            />
            <span className="hidden">cesta</span>
          </div>
        </div>

      </div>

      <div className="bg-amber-400 h-12 flex justify-center">
        
        <form className="flex items-center focus-within:text-black">
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
              className="px-3 py-[4px] w-[360px] outline-none rounded-md border-none placeholder-gray-400 ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
        </form>

        {/* <div className="flex lg:w-3/4 sm:w-full sm:pl-4 space-x-52">
          <ul className="flex gap-7">
            <li className="hidden text-black md:block">Livros</li>
            <li className="hidden text-black md:block">Livros de domínio público</li>
            <li className="hidden text-black md:block">Categorias</li>
            <li className="hidden text-black md:block">Contato</li>
          </ul>
          
          <div className="">
            <span className="hidden text-black md:block">Minha estante de livros</span>
          </div>
        </div> */}
      </div>

    </nav>
  )
}
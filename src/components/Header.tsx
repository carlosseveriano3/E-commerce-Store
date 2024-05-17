import Image from "next/image"
import logo from '../../public/book.png'

const navLinks = [
  {name: "Livros"},
  {name: "Livros de domínio público"},
  {name: "Categorias"},
  {name: "contato"}
]

export function Header() {
  return(
    <header>
      <div className="bg-slate-600 p-2 flex items-center justify-between">
          <Image 
          src={logo}
          alt="logo"
          width="50"
          height="50"
          className="lg:ml-20"
          />

        <div className="m-auto ml-5">
          <span className="font-semibold text-3xl">Don't Panic!</span>
        </div>

        <div>
          <input className="lg:w-[500px] md:w-72 lg:mr-48 md:mr-6 py-[4px] rounded-lg text-black outline-none" type="text" placeholder="  O que você procura?"/>
        </div>

        <div className="flex lg:gap-10 md:gap-3 lg:mr-20">

          <div className="">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              className="size-9 m-auto"
            >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
            />
            </svg>

            <span className="">entrar</span>
          </div>

          <div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              className="size-9 m-auto"
              >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
              />
            </svg>

            <span className="text-center">favoritos</span>
          </div>

          <div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              className="size-9 m-auto"
            >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" 
            />
            </svg>

            <span className="">cesta</span>
          </div>

        </div>

      </div>
      <div className="flex bg-amber-400 h-12 w-full items-center justify-normal">
        <ul className="flex gap-7 ml-[550px]">
          <li className="text-black">Livros</li>
          <li className="text-black">Livros de domínio público</li>
          <li className="text-black">Categorias</li>
          <li className="text-black">Contato</li>
        </ul>
        <div className="flex ml-52">
          <span className="flex text-black">Minha estante de livros</span>
        </div>
      </div>

    </header>
  )
}
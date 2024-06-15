'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FooterItem } from "../app/footer-items"

import arrowFooter from "../../public/assets/Arrow-Down.svg"

type ItemsProp = FooterItem

export default function FooterItems( {item:props} : {item:ItemsProp} ) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-[14px] px-5">
      <div className="flex justify-between sm:justify-around" onClick={() => setIsOpen(!isOpen)}>
        
          <span className="text-xl font-light sm:font-extralight">
            <div className="cursor-pointer sm:cursor-default">{props.title}</div>
            {props.subtitle && (
              <Link className="font-extralight sm:font-thin sm:text-lg sm:hover:underline"
                href={props.path || "#"}>
                {props.subtitle}
              </Link>
            )}
            <div className="font-extralight sm:font-thin sm:text-lg">
              {props.phoneNumber }
              {props.wppNumber}
              {props.email}
              {props.info}
            </div>
          </span>
      
          {props.childrens && (
            <Image 
                alt="arrowFooter"
                src={arrowFooter}
                className={`${isOpen ? "rotate-180 transition":"transition"} cursor-pointer sm:hidden`}
              />
          )}

      </div>
      
      {props.childrens && (
        <div className={`${isOpen ? "h-auto pt-2 transition-all duration-200" : "h-0 overflow-hidden transition-all duration-300"} sm:h-auto sm:text-center`}>
            {props.childrens.map((child, index) => <FooterItems key={index} item={child}/>)}
        </div>
      )}
    </div>
  )
}
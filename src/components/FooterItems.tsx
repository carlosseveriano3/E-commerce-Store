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
      <div className="flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        
          <span className="text-xl font-light">
            {props.title}
            {props.subtitle && (
              <Link href={props.path || "#"}>
                {props.subtitle}
              </Link>
            )}

            {props.phoneNumber}
            {props.wppNumber}
            {props.email}
            {props.info}
          </span>
      
          {props.childrens && (
            <Image 
                alt="arrowFooter"
                src={arrowFooter}
                className={`${isOpen ? "rotate-180 transition":"transition"}`}
              />
          )}

      </div>
      
      {props.childrens && (
        <div className={`${isOpen ? "h-auto pt-2 transition-all duration-200" : "h-0 overflow-hidden"} font-extralight`}>
            {props.childrens.map((child, index) => <FooterItems key={index} item={child}/>)}
        </div>
      )}
    </div>
  )
}
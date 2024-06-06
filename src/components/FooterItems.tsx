import Image from "next/image"

import arrowFooter from "../../public/assets/Arrow-Down.svg"

export default function FooterItems() {
  return (
    <div className="py-[14px] px-5">
      <div className="flex justify-between">
        <span className="text-xl font-light">
          General
        </span>
        <Image 
            alt="arrowFooter"
            src={arrowFooter}
          />
      </div>
    </div>
  )
}
'use client'

import cardImages from "@/app/card-images"
import { useState } from "react"

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(event.currentTarget.id)
  }

  return(
    <div className="">
      <div className="">
          <button
            id={"1"}
            disabled={currentTab === `${currentTab}`}
            onClick={handleTabClick}
          >
            Descrição
          </button>
      </div>
      <div>
        {cardImages.map((book, i) => (
          <div>
            
          </div>
        ))}
      </div>
    </div>
  )
}
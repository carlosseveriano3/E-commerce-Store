'use client'

import { CardImages } from "@/app/card-images"
import { useState } from "react"

type BooksProps = CardImages

export default function Tabs({ books:props }: { books:BooksProps }) {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: "1",
      tabTitle: "Descrição"
    },
    {
      id: "2",
      tabTitle: "Detalhes"
    }
  ]

  const handleTabClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(event.currentTarget.id)
  }

  return(
    <div className="">
      <div className="">
          {tabs.map((tab, i) =>
            <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${currentTab}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
          )}
      </div>
      <div>
          <div>
            {props.description} 
          </div>
      </div>
    </div>
  )
}
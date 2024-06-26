'use client'

import { CardImages } from "@/app/card-images";
import { useState } from "react";
import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";

type BooksProps = CardImages

export default function Tabs(
  { books }: { books:BooksProps }
) {
  const [currentTab, setCurrentTab] = useState("1");
  const [favIconClicked, setFavIconClicked] = useState(false)

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
    <div className="py-2 w-full">
      <div className="border-b-2 relative">
          {tabs.map((tab, i) =>
            <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className={` ${currentTab === tab.id ? `border-x-2 border-t-2 border-white rounded-t shadow-[0_4px_0px_-1.7px_rgba(30,41,59,1)]` : ""} p-2`}
          >
            {tab.tabTitle}
          </button>
          )}
            <button className="absolute right-14 translate-y-1">
              <ShareIcon className="size-7 text-white" />
            </button>
            <button 
              className="absolute right-2"
              onClick={() => setFavIconClicked(!favIconClicked)}
            >
              <HeartIcon 
                className={`size-9 text-red`} 
                fill={favIconClicked ? "red": "transparent"}
                stroke={favIconClicked ? "red": "#e8eaed"} 
              /> 
            </button>
      </div>
      <div className="">
        <div className="">
          {currentTab === "1" ? (
            <div className="mt-2 font-light border-b-2 pb-2 md:border-b-0">
              {books.description}
            </div>
          ) : (
            <table className="w-full border-collapse border border-slate-500">
              <tbody>
                <tr>
                  <td className="border border-white translate-x-3 font-light">Autor(a)</td>
                  <td className="border border-white translate-x-3 font-light">{books.author}</td>
                </tr>
                <tr>
                  <td className="border border-white translate-x-3 font-light">Editora</td>
                  <td className="border border-white translate-x-3 font-light">{books.publishingCompany}</td>
                </tr>
                <tr>
                  <td className="border border-white translate-x-3 font-light">Páginas</td>
                  <td className="border border-white translate-x-3 font-light">{books.pages}</td>
                </tr>
                <tr>
                  <td className="border border-white translate-x-3 font-light">Ano de edição</td>
                  <td className="border border-white translate-x-3 font-light">{books.lauchingData}</td>
                </tr>
              </tbody>
            </table>
          )} 
        </div>
      </div>
    </div>
  )
}
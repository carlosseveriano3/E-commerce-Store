'use client'

import { Dispatch, SetStateAction, createContext, useState } from "react";

export type MyProducts = string[]

export type MyProductsContext = {
  myProductsId: MyProducts,
  setMyProductsId: Dispatch<SetStateAction<MyProducts>>
}

const defaultState = {
  myProductsId: [],
  setMyProductsId: (myProductsId: MyProducts) => {}
} as MyProductsContext

export const MyProductsContext = createContext(defaultState);

export default function MyProductsProvider({children} : {
  children : React.ReactNode;
}) {
  const [myProductsId, setMyProductsId] = useState<MyProducts>(() => {
    if (typeof window !== "undefined") {
      const notesOnStorage = localStorage.getItem('myProducts')
      if (notesOnStorage) {
        return JSON.parse(notesOnStorage)
      }
    }
    
      return []
  })

  return (
    <MyProductsContext.Provider value={{myProductsId, setMyProductsId}}>
      {children}
    </MyProductsContext.Provider>
  )
}
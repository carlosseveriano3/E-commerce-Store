'use client'

import { Dispatch, SetStateAction, createContext, useState } from "react";

export type MyProducts = string[]

export type MyProductsContext = {
  myProducts: MyProducts,
  setMyProducts: Dispatch<SetStateAction<MyProducts>>
}

const defaultState = {
  myProducts: [],
  setMyProducts: (myProducts: MyProducts) => {}
} as MyProductsContext

export const MyProductsContext = createContext(defaultState);

export default function MyProductsProvider({children} : {
  children : React.ReactNode;
}) {
  const [myProducts, setMyProducts] = useState<MyProducts>(() => {
    if (typeof window !== "undefined") {
      const notesOnStorage = localStorage.getItem('myProducts')
      if (notesOnStorage) {
        return JSON.parse(notesOnStorage)
      }
    }
    
      return []
  })

  return (
    <MyProductsContext.Provider value={{myProducts, setMyProducts}}>
      {children}
    </MyProductsContext.Provider>
  )
}
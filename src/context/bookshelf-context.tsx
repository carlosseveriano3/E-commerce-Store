'use client'

import { Dispatch, SetStateAction, createContext, useState } from "react";

export type Bookshelf = string[]

export type BookshelfContext = {
  bookshelf: Bookshelf,
  setBookshelf: Dispatch<SetStateAction<Bookshelf>>
}

const defaultState = {
  bookshelf: [],
  setBookshelf: (bookshelf: Bookshelf) => {}
} as BookshelfContext

export const MyBookshelfContext = createContext(defaultState);

export default function MyBookshelfProvider({children} : {
  children : React.ReactNode;
}) {
  const [bookshelf, setBookshelf] = useState<Bookshelf>(() => {
    if (typeof window !== "undefined") {
      const notesOnStorage = localStorage.getItem('bookshelf')
      if (notesOnStorage) {
        return JSON.parse(notesOnStorage)
      }
    }
    
      return []
  })

  return (
    <MyBookshelfContext.Provider value={{bookshelf, setBookshelf}}>
      {children}
    </MyBookshelfContext.Provider>
  )
}
'use client'

import { Dispatch, SetStateAction, createContext, useState, useEffect } from "react";

export type IdBooks = string[]

export type IdBooksContext = {
  favoriteBooks: IdBooks,
  setFavoriteBooks: Dispatch<SetStateAction<IdBooks>>
}

const defaultState = {
  favoriteBooks: [],
  setFavoriteBooks: (idBooks: IdBooks) => {}
} as IdBooksContext

export const FavoriteBooksContext = createContext(defaultState);

export default function FavoriteBooksProvider({children} : {
  children: React.ReactNode;
}) {
  const [favoriteBooks, setFavoriteBooks] = useState<IdBooks>(() => {
    if (typeof window !== "undefined") {
      const notesOnStorage = localStorage.getItem('favoriteBooks')

      if (notesOnStorage) {
        return JSON.parse(notesOnStorage)
      }
    }

    return []
  })

  if (favoriteBooks === undefined || setFavoriteBooks === undefined) {
    throw new Error('FavoriteBooksContext must be used with a FavoriteBooksProvider')
  }

  return (
    <FavoriteBooksContext.Provider value={{favoriteBooks, setFavoriteBooks}}>
      {children}
    </FavoriteBooksContext.Provider>
  )
}
'use client'

import { Dispatch, SetStateAction, createContext, useState } from "react";

export type IdBooks = {
  id:string[]
}

export type IdBooksContext = {
  favoriteBooks: IdBooks,
  setFavoriteBooks: Dispatch<SetStateAction<IdBooks>>
}

export const FavoriteBooksContext = createContext<Partial<IdBooksContext>>({});

export default function FavoriteBooksProvider({children} : {
  children: React.ReactNode;
}) {
  const [favoriteBooks, setFavoriteBooks] = useState<IdBooks>({id:[]})

  if (favoriteBooks === undefined) {
    throw new Error('FavoriteBooksContext must be used with a FavoriteBooksProvider')
  }

  return (
    <FavoriteBooksContext.Provider value={{favoriteBooks, setFavoriteBooks}}>
      {children}
    </FavoriteBooksContext.Provider>
  )
}
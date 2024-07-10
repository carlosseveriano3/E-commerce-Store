'use client'

import { Dispatch, SetStateAction, createContext, useState, useEffect } from "react";

export type FavoriteProducts = string[]

export type FavoriteProductsContext = {
  favoriteProducts: FavoriteProducts,
  setFavoriteProducts: Dispatch<SetStateAction<FavoriteProducts>>
}

const defaultState = {
  favoriteProducts: [],
  setFavoriteProducts: (favoriteProducts: FavoriteProducts) => {}
} as FavoriteProductsContext

export const FavoriteProductsContext = createContext(defaultState);

export default function FavoriteProductsProvider({children} : {
  children: React.ReactNode;
}) {
  const [favoriteProducts, setFavoriteProducts] = useState<FavoriteProducts>(() => {
    if (typeof window !== "undefined") {
      const notesOnStorage = localStorage.getItem('favoriteProducts')

      if (notesOnStorage) {
        return JSON.parse(notesOnStorage)
      }
    }

    return []
  })

  if (favoriteProducts === undefined || setFavoriteProducts === undefined) {
    throw new Error('FavoriteBooksContext must be used with a FavoriteBooksProvider')
  }

  return (
    <FavoriteProductsContext.Provider value={{favoriteProducts, setFavoriteProducts}}>
      {children}
    </FavoriteProductsContext.Provider>
  )
}
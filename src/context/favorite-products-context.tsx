'use client'

import { Dispatch, SetStateAction, createContext, useState, useEffect } from "react";

export type FavoriteProducts = string[]

export type FavoriteProductsContext = {
  favoriteProductsId: FavoriteProducts,
  setFavoriteProductsId: Dispatch<SetStateAction<FavoriteProducts>>
}

const defaultState = {
  favoriteProductsId: [],
  setFavoriteProductsId: (favoriteProducts: FavoriteProducts) => {}
} as FavoriteProductsContext

export const FavoriteProductsContext = createContext(defaultState);

export default function FavoriteProductsProvider({children} : {
  children: React.ReactNode;
}) {
  const [favoriteProductsId, setFavoriteProductsId] = useState<FavoriteProducts>(() => {
    if (typeof window !== "undefined") {
      const notesOnStorage = localStorage.getItem('favoriteProducts')

      if (notesOnStorage) {
        return JSON.parse(notesOnStorage)
      }
    }

    return []
  })

  if (favoriteProductsId === undefined || setFavoriteProductsId === undefined) {
    throw new Error('FavoriteBooksContext must be used with a FavoriteBooksProvider')
  }

  return (
    <FavoriteProductsContext.Provider value={{favoriteProductsId, setFavoriteProductsId}}>
      {children}
    </FavoriteProductsContext.Provider>
  )
}
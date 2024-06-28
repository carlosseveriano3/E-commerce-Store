'use client'

import { Dispatch, SetStateAction, createContext, useState } from "react";

export type SearchType = string

export type SearchContextType = {
  search: SearchType,
  setSearch: Dispatch<SetStateAction<SearchType>>
}

const defaultState = {
  search: "",
  setSearch: (search: SearchType) => {}
} as SearchContextType

export const SearchContext = createContext(defaultState);

export default function SearchProvider({children}: {
  children: React.ReactNode
}) {
  const [search, setSearch] = useState<SearchType>("")

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      {children}
    </SearchContext.Provider>
  )
}
'use client'

import MyBookshelfProvider from "./bookshelf-context";
import FavoriteBooksProvider from "./favorite-books-context";
import SearchProvider from "./search-context";

export default function AppProvider ({
  children
} : {
  children: React.ReactNode
}) {
  return (
    <>
      <FavoriteBooksProvider>
        <SearchProvider>
          <MyBookshelfProvider>
            {children}
          </MyBookshelfProvider>
        </SearchProvider>
      </FavoriteBooksProvider>
    </>
  )
}
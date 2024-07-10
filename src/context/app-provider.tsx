'use client'

import MyProductsProvider from "./my-products-context";
import FavoriteProductsProvider from "./favorite-products-context";
import SearchProvider from "./search-context";

export default function AppProvider ({
  children
} : {
  children: React.ReactNode
}) {
  return (
    <>
      <FavoriteProductsProvider>
        <SearchProvider>
          <MyProductsProvider>
            {children}
          </MyProductsProvider>
        </SearchProvider>
      </FavoriteProductsProvider>
    </>
  )
}
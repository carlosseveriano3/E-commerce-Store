import { createContext, useState } from "react";

type IdBooks = string[]

const FavoriteBooksContext = createContext<IdBooks | undefined>(undefined);

export function FavoriteBooksWrapper({children} : {
  children: React.ReactNode;
}) {
  let [favoriteBooks, setFavoriteBooks] = useState<IdBooks>()

  return (
    <FavoriteBooksContext.Provider value={{favoriteBooks, setFavoriteBooks}}>
      {children}
    </FavoriteBooksContext.Provider>
  )
}
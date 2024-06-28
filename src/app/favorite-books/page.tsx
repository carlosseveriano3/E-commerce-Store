'use client'

import { useContext } from "react"
import { FavoriteBooksContext } from "../../../src/context/favorite-books-context"
import cardImages, { CardImages } from "../card-images"

export default function FavoriteBooks() {
  const { favoriteBooks } = useContext(FavoriteBooksContext)
  // const books: CardImages = cardImages.find((book) => book.id === favoriteBooks)

  return(
    <div>
      {favoriteBooks.map(book => (
        <div className="px-2">
          {book}
        </div>
      ))}
    </div>
  )
}
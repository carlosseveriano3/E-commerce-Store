'use client'
 
export default function Error({
  error
}: {
  error: Error
}) {
  return (
    <div className="flex flex-col">
      <span>Página não encontrada!!</span>
      <span>A página ou produto não existe!!</span>
    </div>
  )
}
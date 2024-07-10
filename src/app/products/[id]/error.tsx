'use client'
 
export default function Error({
  error
}: {
  error: Error
}) {
  return (
    <div className="min-h-screen sm:min-h-[315px] flex flex-col p-5 space-y-5">
      <span>Página não encontrada!!</span>
      <span>A página ou produto não existe!!</span>
    </div>
  )
}
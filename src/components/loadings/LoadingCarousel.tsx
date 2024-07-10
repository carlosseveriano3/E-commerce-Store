export default function LoadingCarousel() {
  return(
    <div className="animate-pulse flex gap-3 content-center">
      <div className="h-72 w-40 bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
      </div>

      <div className="h-72 w-40 bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
      </div>

      <div className="hidden sm:inline-block h-72 w-40 bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
      </div>

      <div className="hidden md:inline-block h-72 w-40 bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
      </div>

      <div className="hidden lg:inline-block h-72 w-40 bg-white space-y-2 py-1 pb-0 rounded-md overflow-hidden">
      </div>
    </div>
  )
}
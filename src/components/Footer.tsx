import FooterItems from "./FooterItems"
import items from "../app/footer-items"

export function Footer() {
  return(
    <div className="bg-slate-600 w-full overflow-auto sm:flex sm:justify-around lg:-space-x-96">
        {items.map((item, index) => <FooterItems key={index} item={item} />)}
    </div>
  )
}
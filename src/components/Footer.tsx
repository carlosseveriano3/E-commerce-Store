import FooterItems from "./FooterItems"
import items from "../app/footer-items"

export function Footer() {
  return(
    <div className="bg-slate-600 hover:bg-slate-500 w-full overflow-auto">
        {items.map((item, index) => <FooterItems key={index} item={item} />)}
    </div>
  )
}
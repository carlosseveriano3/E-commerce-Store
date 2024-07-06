export async function getProductsCategory(category: string) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=10`)
  const data = await res.json();
  return data.products
}
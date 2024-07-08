import { Products } from "./types";

export async function getProductsCategory(
  category: string
): Promise<{
  products: Products[] | null
  error: string | null
}> {
  try {
    // await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=10`)
    const data = await res.json();

    if (typeof data === 'string' || !data) {
      throw new Error('Failed to fetch products')
    }
    
    return { products: data.products, error: null }
  } catch (error: any) {
    return { products: null, error: error.message || 'Failed too fetch products' }
  }
  
}
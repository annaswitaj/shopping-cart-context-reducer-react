export interface ProductModel {
  id: string
  name: string
  price: string
  image: string
  fastDelivery: boolean
  inStock: string
  ratings: string
}

export type CartModel = ProductModel & { qty: number }

export interface CartProductsModel {
  cart: CartModel[]
  products: ProductModel[]
}

export interface FilterProductsModel {
  byStock: boolean
  byFastDelivery: boolean
  byRating: number
  searchQuery: string
  sort: Sorting
}
export const sorting = ['Ascending', 'Descending', null] as const

export type Sorting = typeof sorting[number]

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

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: ProductModel }
  | { type: 'REMOVE_FROM_CART'; payload: ProductModel }
  | { type: 'CHANGE_CART_QTY'; payload: { id: string; qty: number } }

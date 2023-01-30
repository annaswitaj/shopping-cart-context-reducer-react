export interface ProductModel {
  id: string
  name: string
  price: string
  image: string
  fastDelivery?: boolean
  inStock?: boolean
}

export type CartModel = {
  some?: any
} & ProductModel

import React, { createContext, useContext, useReducer, useState } from 'react'
import {
  CartAction,
  CartProductsModel,
  ProductModel,
} from '../components/model'
import { faker } from '@faker-js/faker'
import { cartReducer } from './Reducers'

faker.seed(99)

interface CartContextProvider {
  state: CartProductsModel
  dispatch: React.Dispatch<CartAction>
}

export const CartContext = createContext<CartContextProvider | null>(null)

interface Props {
  children: React.ReactNode
}

const Context: React.FC<Props> = ({ children }) => {
  const products: ProductModel[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(undefined, undefined, true),
    inStock: faker.random.numeric(1, {
      bannedDigits: ['1', '2', '4', '8', '9'],
    }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.numeric(1, {
      bannedDigits: ['0', '6', '7', '8', '9'],
    }),
  }))

  const initialCartProductState: CartProductsModel = {
    products: products,
    cart: [],
  }
  const [state, dispatch] = useReducer(cartReducer, initialCartProductState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default Context

export const useCartState = () => {
  const cartState = useContext(CartContext)
  if (!cartState) {
    throw new Error(`You forgot CartContextProvider!`)
  }
  return cartState
}

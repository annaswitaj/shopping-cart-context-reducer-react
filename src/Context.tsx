import React, { createContext, useContext, useState } from 'react'
import { CartModel } from './components/model'

interface CartContextProvider {
  cart: CartModel[]
  setCart: React.Dispatch<React.SetStateAction<CartModel[]>>
}

export const CartContext = createContext<CartContextProvider | null>(null)

interface Props {
  children: React.ReactNode
}

const Context: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartModel[]>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartState = () => {
  const cartState = useContext(CartContext)
  if (!cartState) {
    throw new Error(`You forgot CartContextProvider!`)
  }
  return cartState
}

export default Context

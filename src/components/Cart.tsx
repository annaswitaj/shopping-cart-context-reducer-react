import React, { useContext, useEffect, useState } from 'react'
import { CartContext, useCartState } from '../Context'
import { CartModel } from './model'
import SingleProduct from './SingleProduct'

const Cart: React.FC = () => {
  const [total, setTotal] = useState<number>()
  const { cart } = useCartState()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])

  return (
    <div>
      <span style={{ fontSize: 30 }}>My cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
      <div className='productContainer'>
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id}></SingleProduct>
        ))}
      </div>
    </div>
  )
}

export default Cart

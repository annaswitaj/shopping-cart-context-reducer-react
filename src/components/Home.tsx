import React from 'react'

import SingleProduct from './SingleProduct'
import './style.css'
import { useCartState } from '../context/Context'
import Filters from './Filters'

const Home: React.FC = () => {
  const {
    state: { products },
  } = useCartState()

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {products.map((prod) => (
          <SingleProduct key={prod.id} prod={prod}></SingleProduct>
        ))}
      </div>
    </div>
  )
}

export default Home

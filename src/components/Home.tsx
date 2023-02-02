import React from 'react'

import SingleProduct from './SingleProduct'
import './style.css'
import { useCartState } from '../context/Context'
import Filters from './Filters'
import { sorting } from './model'

const Home: React.FC = () => {
  const {
    state: { products },
    filterProductState: {
      byStock,
      byFastDelivery,
      sort,
      byRating,
      searchQuery,
    },
  } = useCartState()

  const transformProducts = () => {
    let sortedProducts = products

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === sorting[0] ? +a.price - +b.price : +b.price - +a.price
      )
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => +prod.ratings >= byRating
      )
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return sortedProducts
  }
  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {transformProducts().map((prod) => (
          <SingleProduct key={prod.id} prod={prod}></SingleProduct>
        ))}
      </div>
    </div>
  )
}

export default Home

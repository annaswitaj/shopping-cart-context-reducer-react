import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import SingleProduct from './SingleProduct'
import './style.css'
import { ProductModel } from './model'

faker.seed(100)

const Home: React.FC = () => {
  const productArray: ProductModel[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(undefined, undefined, true),
  }))

  const [products] = useState(productArray)

  return (
    <div className='productContainer'>
      {products.map((prod) => (
        <SingleProduct key={prod.id} prod={prod}></SingleProduct>
      ))}
    </div>
  )
}

export default Home

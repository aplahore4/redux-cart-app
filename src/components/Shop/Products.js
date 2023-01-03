import React from 'react'
import classes from './Products.module.css'

import ProductItem from './ProductItem'
import { useSelector } from 'react-redux'

const Products = () => {
  const products = useSelector((state) => state.product.items)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products

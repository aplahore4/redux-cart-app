import React from 'react'
import classes from './Cart.module.css'

import Card from '../UI/Card'
import CartItem from './CartItem'

const Cart = () => {
  const DUMMY_CART = [
    {
      id: 1,
      title: 'title',
      quantity: 'quantity',
      total: 'total',
      price: 'price',
    },
    {
      id: 2,
      title: 'title',
      quantity: 'quantity',
      total: 'total',
      price: 'price',
    },
    {
      id: 3,
      title: 'title',
      quantity: 'quantity',
      total: 'total',
      price: 'price',
    },
    {
      id: 4,
      title: 'title',
      quantity: 'quantity',
      total: 'total',
      price: 'price',
    },
    {
      id: 5,
      title: 'title',
      quantity: 'quantity',
      total: 'total',
      price: 'price',
    },
  ]
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {DUMMY_CART.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.total,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart

import React from 'react'
import classes from './CartButton.module.css'

const CartButton = () => {
  const cartQuantity = 500
  const toggleCartHandler = () => {}

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}

export default CartButton

import React from 'react'
import CartButton from '../Cart/CartButton'
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <head className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </head>
  )
}

export default MainHeader

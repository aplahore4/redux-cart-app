import { uiActions } from './ui-slice'
import { cartActions } from './cart-slice'
import { productActions } from './product-slice'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-39886-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      )

      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }

      const data = await response.json()

      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      )
    } finally {
      setTimeout(() => {
        dispatch(uiActions.hideNotification(null))
      }, 2000)
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-39886-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
    }

    try {
      await sendRequest()

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      )
    } finally {
      setTimeout(() => {
        dispatch(uiActions.hideNotification(null))
      }, 2000)
    }
  }
}
export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-39886-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
      )

      if (!response.ok) {
        throw new Error('Could not find product data!')
      }
      const data = await response.json()
      const result = []
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          result.push(data[key])
        }
      }
      return result
    }
    try {
      const productData = await fetchData()
      dispatch(
        productActions.addItemsToProduct({
          items: productData || [],
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching product data failed!',
        })
      )
    } finally {
      setTimeout(() => {
        dispatch(uiActions.hideNotification(null))
      }, 2000)
    }
  }
}

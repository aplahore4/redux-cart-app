import { cartActions } from './cart-slice'
import { uiActions } from './ui-slice'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-39886-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      )

      if (!response.ok) {
        throw new Error('Colud not fetch cart data!')
      }

      const data = await response.json()
      return data
    }
    try {
      const cartData = await fetchData()
      dispatch(
        cartActions.replaceCart({
          items: cartData.items,
          totalQuantity: cartData.totalQuantity,
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetch cart data failed!',
        })
      )
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
        throw new Error('Sending cart data failed')
      }
      return response
    }
    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Sucess!',
          message: 'Sent cart data sucessfully!',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed!',
        })
      )
    }
  }
}

import { uiActions } from './ui-slice'
import { productActions } from './product-slice'

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

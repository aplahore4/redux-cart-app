import { Fragment } from 'react'
import Notification from './components/UI/Notification'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import Products from './components/Shop/Products'

function App() {
  // const notification = {
  //   title: 'notification',
  //   message: 'connected',
  //   status: 'error',
  // }

  const notification = null
  const showCart = false

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        ></Notification>
      )}
      <Layout>
        {showCart && <Cart></Cart>}
        <Products></Products>
      </Layout>
    </Fragment>
  )
}

export default App

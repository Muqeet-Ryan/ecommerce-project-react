import './App.css'
import { Routes,Route } from 'react-router'
import { HomePage } from './pages/Home/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import {OrdersPage} from './pages/Order/OrdersPage'

function App() {

  return (
    <>
    <Routes>
      <Route index   element={<HomePage />}  />
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<OrdersPage />} />

    </Routes>
      
    </>
  )
}

export default App

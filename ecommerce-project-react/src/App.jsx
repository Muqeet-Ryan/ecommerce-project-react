import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes,Route } from 'react-router'
import { HomePage } from './pages/Home/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import {OrdersPage} from './pages/Order/OrdersPage'

function App() {
const [cart,setCart] = useState([]);
useEffect(()=> {
  const fetchCartData = async ()=> {
  const response = await axios.get('http://localhost:3000/api/cart-items?expand=product');
  setCart(response.data);
}
fetchCartData();
},[])

  return (
    <>
    <Routes>
      <Route index   element={<HomePage />}  />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />

    </Routes>
      
    </>
  )
}

export default App

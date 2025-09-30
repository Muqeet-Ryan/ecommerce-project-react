import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import { useState,useEffect } from "react";
import axios from "axios";

export function CheckoutPage({cart}) {

  const [deliveryOptions,setDeliveryOptions] = useState([]);

  useEffect(() => {
    const fetchDeliveryOptionsData = async() => {
      const response = await axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    }
    fetchDeliveryOptionsData();
  },[]);

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <PaymentSummary />
        </div>
      </div>
    </>
  );
}

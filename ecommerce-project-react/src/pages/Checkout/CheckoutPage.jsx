import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderPage } from "./OrderPage";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage() {
  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary />
          <PaymentSummary />
        </div>
      </div>
    </>
  );
}

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./checkOutForm";
import CartProvider from "../Pages/ListingRoutes/Cart/CartContext/CartProvider";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
  return (
    <div className="max-w-[1320px] mx-auto lg:mt-20 mt-14 lg:mb-20 mb-20 font-primary">
      <Elements stripe={stripePromise}>
        <CartProvider>
          <CheckOutForm></CheckOutForm>
        </CartProvider>
      </Elements>
    </div>
  );
};

export default Payment;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/useAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { CartContext } from "../Pages/ListingRoutes/Cart/CartContext/CartProvider";

const CheckOutForm = () => {
  const axiosSecure = UseAxiosSecure();
  const { loading, currentUser } = useContext(AuthContext);
  const { matchedData, totalAmount } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  // payment intent related
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price: totalAmount,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res?.data?.clientSecret);
      });
  }, [axiosSecure, totalAmount]);
  // payment submit..
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (!clientSecret || totalAmount <= 0) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error payment system", error);
      setError(error?.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment..
    const { paymentIntent, error: cardConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: currentUser?.email,
            name: currentUser?.displayName,
          },
        },
      });
    if (cardConfirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
    }
    if (paymentIntent?.status === "succeeded") {
      console.log("transactionId", paymentIntent.id);
      // const payment = {
      //   email: currentUser?.email,
      //   price: amount,
      //   transactionId: paymentIntent?.id,
      //   date: new Data(),
      //   cartId: getData?.map((item) => item?._productId),
      //   productId: allProduct?.map((item) => item?._id),
      // };
      // const res = await axiosSecure.post("/payment", payment);
      // console.log("payments", res?.data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>Your Shopping totalAmount is : ${totalAmount}</div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn btn-sm btn-primary my-4 w-full"
      >
        Pay
      </button>
      <p>{error}</p>
    </form>
  );
};

export default CheckOutForm;

import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import { toast } from "react-toastify";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MdFavoriteBorder } from "react-icons/md";
import { CartContext } from "./CartContext/CartProvider";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";

const Cart = () => {
  const { currentUser, loading } = useContext(AuthContext);
  const [searchParams] = useSearchParams("");
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const [checkoutSession, setCheckoutSession] = useState();
  const { matchedData, totalAmount, isLoading, refetch } =
    useContext(CartContext);
  const axiosSecure = UseAxiosSecure();
  const handleRemove = async (id, title) => {
    try {
      const res = await axiosSecure.delete(`/cartItem/${id}`);
      if (res?.data) {
        toast.success(`${title} is successfully remove`);
        refetch();
      }
    } catch (error) {
      console.log({ message: error.message });
      toast.error(`${title} was not removed`);
    }
  };

  // payment checkout..
  const makePayment = async () => {
    const products = matchedData?.map((item) => ({
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      images: item?.images[0],
    }));

    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK);
    const res = await axiosSecure.post("/create-checkout-session", products);
    const sessionId = res.data.id;
    console.log(sessionId);
    if (sessionId) {
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (result.error) {
        console.log(result.error);
      }
    }
  };
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .get(`/checkout-session?sessionId=${sessionId}`)
        .then((response) => {
          setCheckoutSession(response.data);
        })
        .catch((error) => {
          console.error("Error fetching checkout session:", error);
        });
    } else {
    }
  }, [sessionId]);

  console.log(checkoutSession, "74 no line");

  useEffect(() => {
    if (checkoutSession) {
      const paymentDataSaved = async () => {
        const payment = {
          email: currentUser?.email,
          price: totalAmount,
          transactionId: checkoutSession?.payment_intent,
          cartId: matchedData?.map((item) => item?._id),
          date: new Date(),
        };
        try {
          const res = await axiosSecure.post("/payment", payment);
          if (res?.data?.deleteCartData > 0 && res?.data?.saveProduct) {
            toast.success("Payment successfully completed");
            refetch();
            navigate("/shop", { replace: true });
          }
        } catch (error) {
          console.error("Error saving payment data:", error);
          toast.error("Payment processing failed");
        }
      };
      paymentDataSaved();
    }
  }, [checkoutSession]);

  if (isLoading || loading) {
    return <p className="pt-32">loading..</p>;
  }
  return (
    <div className="max-w-[1320px] mx-auto lg:mt-20 mt-14 lg:mb-20 mb-20 font-primary">
      <Helmet>
        <title>AutoLux | Cart</title>
      </Helmet>

      <div className="flex flex-col p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold">Your cart</h2>

        {matchedData?.map((item) => (
          <div key={item?._id}>
            <ul className="flex flex-col divide-y divide-gray-300">
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                    src={item?.images[0]}
                    alt={item?.title}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          {item?.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item?.category}
                        </p>
                        <p className="text-sm font-semibold text-gray-600">
                          Quantity: {item?.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p>
                          $
                          {item?.quantity === 1
                            ? `${item?.price}`
                            : item?.quantity * parseInt(`${item?.price}`)}
                        </p>
                        <p className="text-sm line-through text-gray-400">
                          no discount!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1 hover:scale-110 duration-200 hover:text-red-700 hover:font-semibold"
                        onClick={() => handleRemove(item?._id, item?.title)}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="w-4 h-4 pr-1"
                        />
                        Remove
                      </button>
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                      >
                        <MdFavoriteBorder className="w-4 h-4" />
                        <span>Add to favorites</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
        {/* Display total amount and buttons once after the map */}
        <div className="space-y-1 text-right mt-4">
          <p>
            Total amount: <span className="font-semibold">${totalAmount}</span>
          </p>
          <p className="text-sm text-gray-600">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <Link
            to="/shop"
            type="button"
            className="px-6 py-2 border rounded-md border-violet-600"
          >
            Back to shop
          </Link>
          <button
            onClick={makePayment}
            type="button"
            className={`${
              totalAmount === 0
                ? "bg-red-500 cursor-not-allowed px-6 py-2 border rounded-md text-gray-50"
                : "px-6 py-2 border rounded-md bg-violet-600 text-gray-50 border-violet-600"
            } `}
            disabled={totalAmount === 0}
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

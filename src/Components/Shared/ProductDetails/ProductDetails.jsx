import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import useProduct from "../../Hooks/useProduct/useProduct";
import { Helmet } from "react-helmet-async";
import { CiShoppingCart } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi2";
import UseAxiosSecure from "../../Hooks/useAxiosSecure/UseAxiosSecure";
import { toast } from "react-toastify";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
const ProductDetails = () => {
  const { loading, currentUser } = useContext(AuthContext);
  const id = useParams();
  const [allProduct, isLoading, refetch] = useProduct();
  const axiosSecure = UseAxiosSecure();
  const [increment, setIncrement] = useState(1);
  const navigate = useNavigate();
  const handleIncrement = () => {
    setIncrement(increment + 1);
  };
  const handleDecrement = () => {
    if (increment > 1) {
      setIncrement(increment - 1);
    }
  };
  const handleToCart = async (num, id) => {
    // console.log(num, id);
    const cart = {
      quantity: num,
      productId: id,
      user: currentUser?.email,
    };
    try {
      const cartData = await axiosSecure.post("/cart", cart);
      console.log(cartData?.data);
      if (cartData?.data) {
        toast.success("Add To Cart Successful");
        setIncrement(null);
        navigate("/cart");
      }
    } catch (error) {
      console.error({ message: error.message });
    }
  };
  if (isLoading || loading) {
    return <p>Loading..</p>;
  }
  return (
    <div className="max-w-[1320px] mx-auto lg:mt-32 mt-28 lg:mb-20 mb-20 font-primary">
      <Helmet>
        <title>AutoLux | Product-Detail</title>
      </Helmet>
      {allProduct?.map(
        (item) =>
          item?._id === id?.id && (
            <div className="grid grid-cols-2 gap-x-10 gap-5">
              <div className="border rounded-lg overflow-hidden">
                <img
                  src={item?.images[0]}
                  className="w-96 h-[450px] mx-auto duration-500 hover:scale-125 cursor-pointer"
                />
              </div>
              {/* right side about of product */}
              <div className="space-y-4">
                <h1 className="text-5xl font-bold">{item?.title}</h1>
                <p className="font-semibold text-2xl">${item?.price}</p>
                <p>{item?.description}</p>
                <div className="flex items-center space-x-20">
                  <p className="text-2xl font-semibold">Quantity</p>
                  <div className="flex space-x-4 items-center">
                    <div className="flex space-x-4 bg-blue-50 px-5 py-3 rounded-lg items-center">
                      <button
                        onClick={handleDecrement}
                        className="text-2xl font-semibold"
                      >
                        <HiOutlineMinus />
                      </button>
                      {increment ? (
                        <p className="text-2xl font-semibold">{increment}</p>
                      ) : (
                        <p className="text-2xl font-semibold">1</p>
                      )}
                      <button
                        onClick={handleIncrement}
                        className="text-xl font-semibold"
                      >
                        <FiPlus />
                      </button>
                    </div>
                    <button
                      onClick={() => handleToCart(increment, item?._id)}
                      className="flex items-center bg-blue-600 text-white px-14 py-3 rounded-lg space-x-3"
                    >
                      <CiShoppingCart className="w-6 h-7" />
                      <p className="text-xl">Add To Cart</p>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex space-x-3 items-center">
                    <h1 className="text-xl">Categories:</h1>
                    <p>{item?.category}</p>
                  </div>
                  <div className="flex space-x-3">
                    <h1 className="text-xl">Tags:</h1>
                    <p className="pt-1">{item?.tag}</p>
                  </div>
                </div>
              </div>
              {/* bottom */}
              <div className="col-span-2 mt-5 space-y-2">
                <h1 className="text-2xl font-semibold text-blue-500">
                  Description
                </h1>
                <p className="col-span-2">{item?.longDescription}</p>
              </div>
              <div className="col-span-2 mt-5">
                <h1 className="text-5xl font-semibold">Related Product</h1>
                {/* Card section */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 pt-4">
                  {allProduct?.map(
                    (item) =>
                      item?._id !== id?.id && (
                        <NavLink to={`/productDetails/${item?._id}`}>
                          <div className="lg:w-[310px] lg:h-[460px] md:w-[300px] h-[450px] w-[300px] bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 mx-auto">
                            <div className="overflow-hidden">
                              <img
                                className="p-8 w-80 h-80 rounded-t-lg hover:scale-110 duration-500"
                                src={item?.images[0]}
                              />
                            </div>

                            <div className="px-5 pb-5">
                              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {item?.title.slice(0, 20)}
                              </h5>

                              <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                  <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                  5.0
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                  ${item?.price}
                                </span>
                                <button
                                  onClick={() =>
                                    handleToCart(increment, item?._id)
                                  }
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      )
                  )}{" "}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductDetails;

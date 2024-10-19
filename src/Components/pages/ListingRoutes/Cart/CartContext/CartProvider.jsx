import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Authentication/AuthProvider/AuthProvider";
import useProduct from "../../../../Hooks/useProduct/useProduct";
import useGetCartData from "../../../../Hooks/useGetCartData/useGetCartData";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const { loading, currentUser } = useContext(AuthContext);
  const [getData, isLoading, refetch] = useGetCartData();
  const [matchedData, setMatchedData] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const user = currentUser?.email;
  const [allProduct] = useProduct();

  useEffect(() => {
    if (!isLoading && !loading && user) {
      let tempTotalAmount = 0;

      const filteredData = allProduct
        ?.map((item) => {
          const cart = getData?.find(
            (cartData) => cartData?.productId === item?._id
          );

          if (cart?.user === user) {
            // Calculate total amount
            tempTotalAmount += cart?.quantity * parseInt(item?.price);

            return {
              ...item,
              quantity: cart?.quantity,
            };
          }

          return null;
        })
        .filter(Boolean);

      setMatchedData(filteredData);
      setTotalAmount(tempTotalAmount); // Set the calculated total amount
    }
  }, [allProduct, getData, isLoading, loading, user]);

  // Passing down data through context
  const data = {
    isLoading,
    refetch,
    matchedData,
    totalAmount,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;

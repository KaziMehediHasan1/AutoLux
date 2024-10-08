import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Authentication/AuthProvider/AuthProvider";
import useProduct from "../../../../Hooks/useProduct/useProduct";
import useGetCartData from "../../../../Hooks/useGetCartData/useGetCartData";
export const CartContext = createContext(null);
const CartProvider = ({ children }) => {
  const { loading, currentUser } = useContext(AuthContext);
  const [getData, isLoading, refetch] = useGetCartData();
  const [matchedData, setMatchedData] = useState();
  const user = currentUser?.email;
  const [allProduct] = useProduct();
  // action..
  useEffect(() => {
    if (!isLoading && !loading && user) {
      const filteredData = allProduct
        ?.map((item) => {
          const cart = getData?.find(
            (cartData) => cartData?.productId === item?._id
          );
          console.log(cart?.quantity * parseInt(item?.price));
          // const totalAmount = cart?.map(price=> )
          if (cart?.user === user) {
            return {
              ...item,
              quantity: cart?.quantity,
            };
          }
          return null;
        })
        .filter(Boolean);
      setMatchedData(filteredData);
    }
  }, [allProduct, getData, isLoading, loading, user,]);
  // pass..
  const data = {
    isLoading,
    refetch,
    matchedData,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;

import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/UseAxiosSecure";

const useGetCartData = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: getData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cartData`);
      return res?.data;
    },
  });
  return [getData, isLoading, refetch];
};

export default useGetCartData;

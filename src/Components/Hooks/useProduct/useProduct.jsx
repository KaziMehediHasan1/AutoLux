import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/UseAxiosSecure";

const useProduct = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: allProduct = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/readProduct`);
      return data?.data;
    },
  });
  return [allProduct, isLoading, refetch];
};

export default useProduct;

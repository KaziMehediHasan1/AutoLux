import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/UseAxiosSecure";

const useGetListing = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: AllListing = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllListings"],
    queryFn: async () => {
      const data = await axiosSecure.get(
        `${import.meta.env.VITE_SERVER_PORT}/listingDetail`
      );
      return data.data;
    },
  });
  return [AllListing, isLoading, refetch];
};

export default useGetListing;

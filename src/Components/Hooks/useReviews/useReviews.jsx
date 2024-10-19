import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/UseAxiosSecure";

const useReviews = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: allReviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/allReviews`);
      return data?.data;
    },
  });
  return [allReviews, isLoading, refetch];
};

export default useReviews;

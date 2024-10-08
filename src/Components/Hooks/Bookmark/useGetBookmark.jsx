import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/UseAxiosSecure";

const useGetBookmark = () => {
  const axiosSecure = UseAxiosSecure();

  const {
    data: bookmarked = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookmarked"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/bookmarked`);
      return data?.data;
    },
  });
  return [bookmarked, isLoading, refetch];
};

export default useGetBookmark;

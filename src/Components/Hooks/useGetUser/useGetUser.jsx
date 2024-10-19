import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/UseAxiosSecure";

const useGetUser = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: AllUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllUsers"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/users`);
      return data.data;
    },
  });
  return [AllUser, isLoading, refetch];
};

export default useGetUser;

import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/UseAxiosSecure";

const useGetBlogs = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: AllBlog = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllBlog"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/blogs`);
      return data?.data;
    },
  });
  return [AllBlog, isLoading, refetch];
};

export default useGetBlogs;

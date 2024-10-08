import { NavLink } from "react-router-dom";
import useGetBlogs from "../../Hooks/useGetBlogs/useGetBlogs";
const Blog = () => {
  const [AllBlog, isLoading] = useGetBlogs();
  // console.log(AllBlog);
  if (isLoading) {
    return <p>loading..</p>;
  }

  return (
    <div className="max-w-[1320px] mx-auto mt-10 mb-10 font-primary">
      <h1 className="text-center text-4xl font-semibold font-primary">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 lg:gap-28 md:gap-5 gap-5">
        {AllBlog?.slice(0,6).map((item) => (
          <NavLink
            to={`/blog-details/${item?._id}`}
            className="lg:w-[390px] w-[350px] lg:h-[240px]  mx-auto"
          >
            <div className="overflow-hidden rounded-lg">
              {item?.images?.slice(0, 1)?.map((pic) => (
                <img
                  key={item?._id}
                  src={pic}
                  className="w-[390px] h-[240px] rounded-lg hover:scale-110 duration-300"
                />
              ))}
            </div>
            <div className="flex space-x-3 pt-3">
              <p>{item?.authorData?.authorName}</p>
              <p>November 20,2023</p>
            </div>
            <p className="text-xl font-medium">{item?.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Blog;

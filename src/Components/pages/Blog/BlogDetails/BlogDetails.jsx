import { useParams } from "react-router-dom";
import useGetBlogs from "../../../Hooks/useGetBlogs/useGetBlogs";

const BlogDetails = () => {
  const {id }= useParams();
  const [AllBlog, isLoading, refetch] = useGetBlogs();
  return (
    <div className="max-w-screen-xl mx-auto mt-20 mb-10 font-primary">
      {AllBlog?.map(
        (item) =>
          item?._id === id && (
            <div key={item?._id}>
              <section className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {item?.images?.slice(0, 3).map((pic, index) => (
                  <img src={pic} className={`md:w-96 md:h-[370px] w-56 h-44 px-[2px] md:px-1 lg:px-0 rounded-md`} />
                ))}
              </section>
              <h1 className="mt-8 px-5 lg:px-0 pl-2 lg:pl-0 font-semibold text-3xl">
                {item?.title}
              </h1>
              <p className=" lg:px-4 pl-3 lg:pl-0 px-5 mt-6 text-gray-500">{item?.description}</p>
            </div>
          )
      )}
    </div>
  );
};

export default BlogDetails;

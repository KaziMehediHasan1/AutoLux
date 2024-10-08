import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/useAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const Blogs = () => {
  const axiosSecure = UseAxiosSecure();
  const { loading, currentUser } = useContext(AuthContext);
  const [data, setData] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchData(currentPages, search);
  }, [currentPages, search]);
  const fetchData = async (page, search) => {
    try {
      const res = await axiosSecure.get(
        `/blogPage?page=${page}&limit=8&search=${search}`
      );
      setData(res?.data?.AllBlog);
      setTotalPages(res?.data?.totalPages);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  const handleNextPage = () => {
    if (currentPages < totalPages) {
      setCurrentPages(currentPages + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPages > 1) {
      setCurrentPages(currentPages - 1);
    }
  };
  const handleDetails = async (id) => {
    if (currentUser?.email) {
      navigate(`/articleDetails/${id}`);
      const res = await axiosSecure.put(`/blogs/${id}`);
      if (res?.data?.success) {
        navigate(`/blog-details/${id}`);
      }
    } else if (!currentUser?.email) {
      toast.error("Please Login first!");
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto lg:mt-28 mt-20 lg:mb-36 mb-20">
      <Helmet>
        <title>AutoLux | Blog</title>
      </Helmet>
      <>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="lg:w-full md:w-[710px] w-[345px] lg:mx-6 md:mx-6 mx-8 py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          placeholder="Search"
        />
      </>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 lg:gap-36 md:gap-5 gap-5 mx-8 md:mx-5 lg:mx-0">
        {data?.map((item) => (
          <NavLink
            onClick={() => handleDetails(item?._id)}
            className="lg:w-[390px] w-[350px] lg:h-[240px]"
          >
            <div key={item?._id} className="overflow-hidden rounded-lg">
              {item?.images?.slice(0, 1).map((pic) => (
                <img
                  src={pic}
                  alt="blog"
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
      <div>
        {/* pagination */}
        <div className="flex lg:mt-32 mt-20 justify-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPages === 1}
            className={`flex items-center justify-center px-4 py-2 mx-1 ${
              currentPages === 1
                ? "cursor-not-allowed text-gray-500"
                : "hover:bg-blue-500 hover:text-white"
            } bg-white rounded-md dark:bg-gray-800 dark:text-gray-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPages(index + 1)}
              className={` px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                currentPages === index + 1 && "bg-blue-500 text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPages === totalPages}
            className={`flex items-center justify-center px-4 py-2 mx-1 ${
              currentPages === totalPages
                ? "cursor-not-allowed text-gray-500"
                : "hover:bg-blue-500 hover:text-white"
            } bg-white rounded-md dark:bg-gray-800 dark:text-gray-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

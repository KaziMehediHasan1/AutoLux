import { useContext, useState } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const AllBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const email = currentUser?.email;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPages] = useState(1);
  const {
    data: AllBlogs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllBlogs", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/DashBlog?page=${currentPage}&limit=5`
      );
      setTotalPages(res?.data?.totalPages);
      return res?.data?.AllBlogs || [];
    },
  });
  // console.log(AllBlogs);
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this blog!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/blogs/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            swal("Poof! Your blog has been deleted!", {
              icon: "success",
            });
          }
          refetch();
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPages(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPages(currentPage - 1);
    }
  };

  if (isLoading) {
    <p>Loading..</p>;
  }
  return (
    <div className="font-primary lg:w-[1500px] md:w-[650px] w-[320px] mx-auto">
      <h1 className="md:text-4xl text-2xl font-semibold">All Blogs</h1>
      <p className="text-gray-600">My Adding all cars and bikes article</p>
      <div className="border border-gray-300 rounded-xl mt-5 py-5">
        <div className="w-[95%] mx-auto">
          {/* title */}
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 bg-blue-100 rounded-md py-3 text-blue-700 font-semibold">
            {/* <h1>No</h1> */}
            <h1 className="lg:col-span-2 pl-6 ">Photo</h1>
            <h1 className="md:text-center lg:text-start hidden md:block">
              Title
            </h1>
            <h1 className="md:text-center lg:text-start hidden md:block">
              Author
            </h1>
            <h1 className="hidden lg:block">Author Pic</h1>
            <h1 className="text-center lg:text-start lg:ml-5 hidden md:block">
              Action
            </h1>
          </div>
          {/* data */}
          {AllBlogs?.map(
            (blog, index) =>
              blog?.authorData?.authorMail === email && (
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 mt-4 items-center">
                  <img
                    key={blog?._id}
                    src={blog?.images[0]}
                    className="lg:w-56 lg:h-36 w-36 h-28 rounded-lg lg:col-span-2 hidden md:block"
                  />
                  <div className="flex md:hidden items-center">
                    <img
                      key={blog?._id}
                      src={blog?.images[0]}
                      className="w-28 h-20 rounded-lg lg:col-span-2 md:hidden block"
                    />
                    <div>
                      <p className="text-sm pl-4 md:text-center lg:text-start block md:hidden font-semibold">
                        {blog?.title.slice(0, 30)}..
                      </p>
                      <p className="text-sm pl-4 md:text-center lg:text-start md:hidden block text-gray-600">
                        <span className="text-blue-500">Author:-</span> {blog?.authorData?.authorName}
                      </p>
                    </div>
                  </div>
                  <p className="text-[17px] md:text-center lg:text-start hidden md:block">
                    {blog?.title.slice(0, 30)}..
                  </p>
                  <p className="text-[17px] md:text-center lg:text-start hidden md:block">
                    {blog?.authorData?.authorName}
                  </p>
                  <img
                    src={blog?.authorData?.authorPhoto}
                    className="w-16 h-16 hidden lg:block rounded-lg"
                  />

                  <div className="flex space-x-4 md:justify-center lg:justify-start items-center ">
                    <button onClick={() => handleDelete(blog?._id)}>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="md:w-10 md:h-6 w-4 h-5"
                      />
                    </button>
                    <Link to={`/updateBlog/${blog?._id}`}>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="md:w-10 md:h-6 w-4 h-5"
                      />
                    </Link>
                  </div>
                </div>
              )
          )}
          {/* pagination */}
          <div className="flex mt-20 lg:mt-14 justify-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-4 py-2 mx-1 ${
                currentPage === 1
                  ? "cursor-not-allowed text-gray-500"
                  : "hover:bg-blue-500 hover:text-white"
              } bg-white rounded-md`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPages(index + 1)}
                className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md hover:bg-blue-500 hover:text-white ${
                  currentPage === index + 1 && "bg-blue-500 text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-4 py-2 mx-1 ${
                currentPage === totalPages
                  ? "cursor-not-allowed text-gray-500"
                  : "hover:bg-blue-500 hover:text-white"
              } bg-white rounded-md`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;

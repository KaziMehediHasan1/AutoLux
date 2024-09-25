import { useContext } from "react";
import useGetBlogs from "../../../Hooks/useGetBlogs/useGetBlogs";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import { Pagination } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const [AllBlog, isLoading, refetch] = useGetBlogs();
  const { currentUser } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const email = currentUser?.email;
  // pagination..
  // const []
  // console.log(AllBlog);
  const handleDelete = (id) => {
    // console.log("deleted data", id);
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

  if (isLoading) {
    <p>Loading..</p>;
  }
  return (
    <div className="font-primary w-[1500px] mx-auto">
      <h1 className="text-4xl font-semibold">My Listings</h1>
      <p className="text-gray-600">My Listing all cars and bikes etc..!</p>
      <div className="border border-gray-300 rounded-xl mt-5 py-5">
        <div className="w-[95%] mx-auto">
          {/* title */}
          <div className="grid grid-cols-6 gap-5 bg-blue-100 rounded-md py-3 text-blue-700 font-semibold">
            {/* <h1>No</h1> */}
            <h1 className="col-span-2 pl-6">Photo</h1>
            <h1>Title</h1>
            <h1>Author</h1>
            <h1>Author Pic</h1>
            <h1>Action</h1>
          </div>
          {/* data */}
          {AllBlog?.map(
            (blog, index) =>
              blog?.authorData?.authorMail === email && (
                <div className="grid grid-cols-6 gap-5 mt-4 items-center">
                  {/* <div key={blog?._id} className=" flex">
                    <h1>{index + 1}</h1>
                  </div> */}
                  <div key={blog?._id} className="col-span-2 flex">
                    <img
                      src={blog?.images[0]}
                      className="w-32 h-28 rounded-lg"
                    />
                  </div>
                  <p className="text-[17px]">{blog?.title}</p>
                  <p className="text-[17px]">{blog?.authorData?.authorName}</p>
                  <img
                    src={blog?.authorData?.authorPhoto}
                    className="w-16 h-16 rounded-lg"
                  />

                  <div className="flex space-x-4">
                    <button onClick={() => handleDelete(blog?._id)}>
                      <FontAwesomeIcon icon={faTrashCan} className="w-10 h-6" />
                    </button>
                    <Link to={`/updateBlog/${blog?._id}`}>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="w-10 h-6"
                      />
                    </Link>
                  </div>
                </div>
              )
          )}
          {/* pagination */}
          <div className=" flex justify-center mt-6">
            <Pagination count={10} shape="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;

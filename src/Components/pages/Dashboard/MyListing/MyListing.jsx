import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyListing = () => {
  const axiosSecure = UseAxiosSecure();
  const { currentUser } = useContext(AuthContext);
  const email = currentUser?.email;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPages] = useState(1);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myListing", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/myListing?page=${currentPage}&limit=5`
      );
      setTotalPages(res?.data?.totalPage);
      return res?.data?.myListing || [];
    },
  });

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

  const handleDeleteListing = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this listing!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/DashListing/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            swal("Deleted successfully!", { icon: "success" });
          }
          refetch();
        });
      }
    });
  };

  const handleUpdateListing = (id) => {
    // handle update functionality
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Dashboard | My Listings</title>
      </Helmet>
      <div className="font-primary lg:w-[1500px] md:w-[650px] w-[320px] mx-auto">
        <h1 className="md:text-4xl text-2xl font-semibold">My Listings</h1>
        <p className="text-gray-600 text-sm md:text-xl">
          All your listings are displayed here.
        </p>
        <div className="border border-gray-300 rounded-xl mt-5 py-5">
          <div className="lg:w-[95%] md:w-[98%] w-[280px] ml-5 md:mx-auto">
            {/* title */}
            <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-1 md:gap-5 bg-blue-100 rounded-md py-3 text-blue-700 font-semibold">
              <h1 className="lg:col-span-3 md:col-span-2 col-span-1 pl-6 text-xs md:text-[15px]">
                Make
              </h1>
              <h1 className="hidden md:block  md:text-[15px]">Model</h1>
              <h1 className="hidden lg:block md:text-[15px]">Year</h1>
              <h1 className="hidden lg:block md:text-[15px]">Transmission</h1>
              <h1 className="hidden lg:block  md:text-[15px]">Fuel Type</h1>
              <h1 className=" md:text-[15px] hidden md:block">Action</h1>
            </div>
            {/* data */}
            {data?.map(
              (listing) =>
                listing?.user === email && (
                  <div
                    className="grid lg:grid-cols-8 grid-cols-1 md:grid-cols-4 lg:gap-5 mt-4 items-center"
                    key={listing?._id}
                  >
                    <div className="lg:col-span-3 md:col-span-2 flex items-center">
                      <img
                        src={listing?.carImage}
                        className="lg:w-32 w-14 h-14 lg:h-28 md:w-20 md:h-20 rounded-lg"
                      />
                      <div className="pl-4 md:pt-3">
                        <p className="text-sm md:text-xl md:font-semibold lg:font-normal">{listing?.title}</p>
                        <p className="hidden lg:block">
                          {listing?.description.slice(0, 50)}..
                          
                        </p>
                        <p className="lg:hidden text-xs">
                          {listing?.description.slice(0, 30)}..
                        </p>
                        <p className="lg:font-bold text-xs md:text-sm lg:text-xl">
                          ${listing?.price}
                        </p>
                      </div>
                    </div>
                    <p className="text-[17px] hidden md:block">
                      {listing?.model}
                    </p>
                    <p className="text-[17px] hidden lg:block">
                      {listing?.year}
                    </p>
                    <p className="text-[17px] hidden lg:block">
                      {listing?.transmission}
                    </p>
                    <p className="text-[17px] hidden lg:block">
                      {listing?.fuel}
                    </p>
                    {/* action */}
                    <div className="flex space-x-4 mt-3 lg:mt-0">
                      <button onClick={() => handleDeleteListing(listing?._id)}>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="md:w-10 md:h-6 w-4 h-5"
                        />
                      </button>
                      <button onClick={() => handleUpdateListing(listing?._id)}>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="md:w-10 md:h-6 w-4 h-5"
                        />
                      </button>
                    </div>
                  </div>
                )
            )}

            {/* pagination */}
            <div className="flex mt-8 md:mt-20 lg:mt-1 justify-center px-5">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center md:px-4 py-2 mx-1 ${
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
                  className={`px-2 md:px-4 py-2 mx-1 hidden md:block text-gray-700 transition-colors duration-300 transform rounded-md hover:bg-blue-500 hover:text-white ${
                    currentPage === index + 1 && "bg-blue-500 text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center md:px-4 py-2 mx-1 ${
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
    </div>
  );
};

export default MyListing;

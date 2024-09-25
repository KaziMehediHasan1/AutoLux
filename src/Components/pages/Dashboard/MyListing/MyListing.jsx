import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import useGetListing from "../../../Hooks/useGetListingData/useGetListing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@mui/material";
import swal from "sweetalert";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
const MyListing = () => {
  const axiosSecure = UseAxiosSecure();
  const { currentUser, loading } = useContext(AuthContext);
  const email = currentUser?.email;
  const [AllListing, isLoading, refetch] = useGetListing();
  if (loading || isLoading) {
    <p>Loading...</p>;
  }
  const handleDeleteListing = (id) => {
    // console.log("dd", id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this blog!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/DashListing/${id}`).then((res) => {
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
  const handleUpdateListing = (id) => {
    // console.log(id, "for checking,oh id is here..");
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | My Listings</title>
      </Helmet>
      <div className="font-primary w-[1500px] mx-auto">
        <h1 className="text-4xl font-semibold">My Listings</h1>
        <p className="text-gray-600">My Listing all cars and bikes etc..!</p>
        <div className="border border-gray-300 rounded-xl mt-5 py-5">
          <div className="w-[95%] mx-auto">
            {/* title */}
            <div className="grid grid-cols-8 gap-5 bg-blue-100 rounded-md py-3 text-blue-700 font-semibold">
              <h1 className="col-span-3 pl-6">Make</h1>
              <h1>Model</h1>
              <h1>Year</h1>
              <h1>Transmission</h1>
              <h1>Fuel Type</h1>
              <h1>Action</h1>
            </div>
            {/* data */}
            {AllListing?.map(
              (listing) =>
                listing?.user === email && (
                  <div className="grid grid-cols-8 gap-5 mt-4 items-center">
                    <div key={listing?._id} className=" col-span-3 flex">
                      <img
                        src={listing?.carImage}
                        className="w-32 h-28 rounded-lg"
                      />
                      <div className="pl-4 pt-3">
                        <p>{listing?.title}</p>
                        <p>{listing?.description.slice(0, 50)}..</p>
                        <p className="font-bold">${listing?.price}</p>
                      </div>
                    </div>
                    <p className="text-[17px]">{listing?.model}</p>
                    <p className="text-[17px]">{listing?.year}</p>
                    <p className="text-[17px]">{listing?.transmission}</p>
                    <p className="text-[17px]">{listing?.fuel}</p>
                    <div className="flex space-x-4">
                      <button onClick={() => handleDeleteListing(listing?._id)}>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="w-10 h-6"
                        />
                      </button>
                      <button onClick={() => handleUpdateListing(listing?._id)}>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="w-10 h-6"
                        />
                      </button>
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
    </div>
  );
};

export default MyListing;

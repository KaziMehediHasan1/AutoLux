import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import useGetListing from "../../../Hooks/useGetListingData/useGetListing";
import useGetBookmark from "../../../Hooks/Bookmark/useGetBookmark";
import { GoBookmarkSlash } from "react-icons/go";
import { toast } from "react-toastify";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";

const Favorites = () => {
  const [AllListing, isLoading] = useGetListing();
  const [bookmarked, , refetch] = useGetBookmark();
  const { loading, currentUser } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const [isBookLoading, setBookLoading] = useState(false);
  const bookmarkedUser = currentUser?.email;

  const handleBookmark = async (id) => {
    setBookLoading((prev) => ({ ...prev, [id]: true }));

    const currentBookmark = bookmarked.find(
      (booked) => booked?.listingId === id && booked?.person === bookmarkedUser
    );
    try {
      if (currentBookmark?.isBookmarked) {
        // If already bookmarked, remove the bookmark
        const res = await axiosSecure.put(`/bookmark/${id}`, {
          person: bookmarkedUser,
        });
        if (res?.data.success) {
          toast.success("Bookmark removed successfully");
          setBookLoading((prev) => ({ ...prev, [id]: false }));
          refetch();
        } else {
          toast.error("Failed to remove bookmark");
        }
      }
    } catch (error) {
      console.error("Error updating bookmark", error);
    }
  };
  // Return loading state properly
  if (loading || isLoading) {
    return <p>Loading..</p>;
  }
  return (
    <div>
      <Helmet>
        <title>AutoLux | My Favorite</title>
      </Helmet>
      <div className="font-primary lg:w-[1500px] md:w-[650px] w-[320px] mx-auto">
        <h1 className="md:text-4xl text-2xl font-semibold">My Favorites</h1>
        <p className="text-gray-600 text-sm md:text-xl">
          All your listings are displayed here.
        </p>
        <div className="border border-gray-300 rounded-xl mt-5 py-5">
          <div className="lg:w-[95%] md:w-[98%] w-[280px] ml-5 md:mx-auto">
            {/* Title */}
            <div className="grid lg:grid-cols-8 md:grid-cols-3 grid-cols-1 md:gap-5 bg-blue-100 rounded-md py-3 text-blue-700 font-semibold">
              <h1 className="lg:col-span-3 md:col-span-2 col-span-1 pl-6 text-xs md:text-[15px] md:ml-5 lg:ml-0">
                Make
              </h1>
              <h1 className="hidden lg:block md:text-[15px]">Model</h1>
              <h1 className="hidden lg:block md:text-[15px]">Year</h1>
              <h1 className="hidden lg:block md:text-[15px]">Transmission</h1>
              <h1 className="hidden lg:block md:text-[15px]">Fuel Type</h1>
              <h1 className="md:text-[15px] hidden md:block md:text-center lg:text-start ">
                Action
              </h1>
            </div>

            {/* Mapping through listings */}
            {AllListing?.map((listing) => {
              const booked = bookmarked?.find(
                (booked) =>
                  booked?.listingId === listing?._id &&
                  booked?.person === bookmarkedUser &&
                  booked?.isBookmarked
              );

              return (
                booked && ( // Render only if booked is true
                  <div
                    className="grid lg:grid-cols-8 grid-cols-1 md:grid-cols-3 lg:gap-5 mt-4 items-center"
                    key={listing?._id}
                  >
                    <div className="lg:col-span-3 md:col-span-2 flex items-center md:ml-5 lg:ml-0">
                      <img
                        src={listing?.carImage}
                        className="lg:w-32 w-14 h-14 lg:h-28 md:w-20 md:h-20 rounded-lg"
                        alt="Car"
                      />
                      <div className="pl-4 md:pt-3">
                        <p className="text-sm md:text-xl md:font-semibold lg:font-normal">
                          {listing?.title}
                        </p>
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
                    <p className="text-[17px] hidden lg:block">
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
                    {/* Action */}
                    <div className="flex space-x-4 mt-3 lg:mt-0 md:justify-center lg:justify-normal">
                      {isBookLoading[listing?._id] ? (
                        <div className=" bg-white w-8 h-8 rounded-full p-1 cursor-pointer z-10">
                          <span className="loading loading-spinner text-primary hidden lg:block"></span>
                          <span className="loading loading-ring loading-md lg:hidden block"></span>
                        </div>
                      ) : (
                        <GoBookmarkSlash
                          onClick={() => handleBookmark(listing?._id)}
                          className={`z-10 md:w-14 md:h-[50px] w-10 h-10 p-2 rounded-full cursor-pointer `}
                          disabled={isBookLoading[listing?._id]} // Disable bookmark button while loading
                        />
                      )}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

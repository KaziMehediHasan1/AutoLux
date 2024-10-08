import {
  faCogs,
  faGasPump,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetListing from "../../Hooks/useGetListingData/useGetListing";
import { Link } from "react-router-dom";
const LatestCars = () => {
  const [AllListing, isLoading, refetch] = useGetListing();
  // console.log(AllListing, "11 line");
  if (isLoading) {
    <p>Loading.....</p>;
  }

  return (
    <div className="max-w-[1320px] mx-auto mt-20 font-primary">
      <h1 className="text-center text-4xl font-bold ">Latest Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 mt-10 ">
        {AllListing?.slice(0, 4)?.map((listing) => (
          <div className="w-[300px] h-[420px] mx-auto flex-shrink-0 bg-gray-900 rounded-lg ">
            <div className="overflow-hidden">
              <img
                src={listing?.carImage}
                alt="cars"
                className=" w-[300px] h-[218.66px] rounded-lg hover:scale-125 duration-300"
              />
            </div>
            <div className="py-4 px-4 text-white">
              <h1 className="text-white text-sm">
                {listing?.type} <span>{listing?.year}</span>
              </h1>
              <p className="text-sm pt-1">{listing?.drive}</p>
              <div className=" h-[1px] border border-gray-600 mt-2"></div>
              <div className="grid grid-cols-3">
                <div className="pt-2 space-y-1 text-center">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  <p className="text-center">{listing?.mileage} Miles</p>
                </div>
                <div className="pt-2 space-y-1 text-center">
                  <FontAwesomeIcon icon={faGasPump} />
                  <p className="text-center">{listing?.fuel}</p>
                </div>
                <div className="pt-2 space-y-1 text-center">
                  <FontAwesomeIcon icon={faCogs} />
                  <p className="text-center">{listing?.transmission}</p>
                </div>
              </div>
              <Link to={`/car-details/${listing?._id}`}>
                <button className="w-full mt-3 py-1 bg-blue-600 rounded-md font-medium hover:bg-blue-900">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCars;

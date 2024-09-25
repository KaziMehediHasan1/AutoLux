import {
  faCogs,
  faGasPump,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";
import UseAxiosSecure from "../../Hooks/useAxiosSecure/UseAxiosSecure";
import { Link, useLocation } from "react-router-dom";

const Listings = () => {
  const axiosSecure = UseAxiosSecure();
  const location = useLocation();
  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const initialCondition = searchParams.get("condition") || "";
  const initialMake = searchParams.get("make") || "";
  const initialModel = searchParams.get("model") || "";
  const initialPrice = searchParams.get("price") || "";

  // States for filtering
  const [condition, setCondition] = useState(initialCondition);
  const [make, setMake] = useState(initialMake);
  const [model, setModel] = useState(initialModel);
  const [price, setPrice] = useState(initialPrice);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, condition, make, model, price]);
  const fetchData = async (page) => {
    try {
      const res = await axiosSecure.get(
        `/listing-page?page=${page}&limit=8&condition=${
          condition ? condition : ""
        }&make=${make ? make : ""}&model=${model ? model : ""}&price=${
          price ? price : ""
        }`
      );

      setData(res?.data?.listing);
      setTotalPages(res?.data?.totalPages);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchData();
  };

  return (
    <div className="max-w-[1320px] mx-auto md:mt-[170px] mt-20 font-primary">
      <Helmet>
        <title>AutoLux | Listings</title>
      </Helmet>
      {/* search field */}
      <div className="lg:top-20 md:top-[85px] absolute lg:left-[26%] sm:top-0 md:left-[14%] left-[48px] mx-auto md:py-2 md:px-5 lg:px-2 md:w-[580px] lg:w-[880px] w-[300px] lg:py-3 rounded-3xl shadow-md shadow-blue-200">
        <form onSubmit={handleSubmit}>
          <ul className="grid grid-cols-2 px-10 md:px-0 space-y-2 md:space-y-0 md:grid-cols-4 ">
            <li className="flex items-center  p-2 md:p-0">
              <select
                name="condition"
                onChange={(e) => setCondition(e.target.value)}
                className="border-none bg-transparent outline-none appearance-none font-primary"
              >
                <option selected value="">
                  Condition
                </option>
                <option value="Used">Used</option>
                <option value="New">New</option>
                <option value="Certified Pre-Owned">Certified Pre-Owned</option>
                <option value="Salvage">Salvage</option>
                <option value="Rebuilt">Rebuilt</option>
              </select>
              <RiArrowDropDownFill className="text-xl" />
            </li>
            <li className="flex items-center p-2 md:p-0">
              <select
                name="make"
                onChange={(e) => setMake(e.target.value)}
                className="border-none bg-transparent outline-none appearance-none"
              >
                <option selected value="">
                  Any Make
                </option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="Honda">Honda</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes Benz">Mercedes Benz</option>
              </select>
              <RiArrowDropDownFill className="text-xl" />
            </li>
            <li className="flex items-center p-2 md:p-0">
              <select
                name="model"
                onChange={(e) => setModel(e.target.value)}
                className="border-none bg-transparent outline-none appearance-none"
              >
                <option selected value="">
                  Any Model
                </option>
                <option value="Camry">camry</option>
                <option value="F-150">F-150</option>
                <option value="civic">Civic</option>
                <option value="3-series">3-series</option>
                <option value="c-class">C-Class</option>
              </select>
              <RiArrowDropDownFill className="text-xl" />
            </li>
            <li className="flex items-center justify-between lg:pr-4 p-2 md:p-0">
              <div className="flex items-center">
                <select
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  className="border-none bg-transparent outline-none appearance-none"
                >
                  <option selected value="">
                    All Price
                  </option>
                  <option value="250000">$1,000</option>
                  <option value="2000">$2000</option>
                  <option value="3000">$3000 </option>
                  <option value="4000">$4000</option>
                  <option value="5000">$5000</option>
                  <option value="6000">$6000</option>
                  <option value="7000">$7000</option>
                  <option value="8000">$8000</option>
                  <option value="8000">$8000 +</option>
                </select>
                <RiArrowDropDownFill className="text-xl" />
              </div>
              <button
                type="submit"
                className="flex items-center bg-blue-500 rounded-full space-x-3"
              >
                <IoIosSearch className=" md:h-10 md:w-10 lg:h-10 lg:w-10 lg:p-2 hidden lg:block  text-white cursor-pointer"></IoIosSearch>
                <p className="text-white p-2 hidden lg:block">Find</p>
              </button>
              <button className="bg-blue-500 hidden md:block lg:hidden rounded-full text-white cursor-pointer h-10 p-[12px]">
                <IoIosSearch></IoIosSearch>
              </button>
            </li>
          </ul>
        </form>
      </div>
      {/* card */}
      <h1 className="text-4xl font-semibold my-5 md:pl-8 lg:pl-0 text-center lg:text-start md:py-4 pt-28">
        Listings
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((item) => (
          <div
            key={item?._id}
            className="w-[310px] h-[420px] flex-shrink-0 mx-auto bg-white shadow-md hover:shadow-lg rounded-xl"
          >
            <div className="overflow-hidden">
              <img
                src={item?.carImage}
                alt="cars"
                className=" w-[300px] h-[218.66px] rounded-lg hover:scale-125 duration-300"
              />
            </div>
            <div className="py-4 px-4">
              <h1 className="text-sm">{item?.make}</h1>
              <p className="text-sm pt-1">{item?.drive}</p>
              <div className=" border border-gray-600 mt-2"></div>
              <div className="grid grid-cols-3">
                <div className="pt-2 space-y-1 text-center">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  <p className="text-center">{item?.mileage}</p>
                </div>
                <div className="pt-2 space-y-1 text-center">
                  <FontAwesomeIcon icon={faGasPump} />
                  <p className="text-center">{item?.fuel}</p>
                </div>
                <div className="pt-2 space-y-1 text-center">
                  <FontAwesomeIcon icon={faCogs} />
                  <p className="text-center">{item?.transmission}</p>
                </div>
              </div>
              <Link to={`/car-details/${item?._id}`}>
                <button className="w-full mt-3 py-1 bg-blue-500 rounded-md font-medium text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <div class="flex mt-6 justify-center mb-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`flex items-center justify-center px-4 py-2 mx-1 ${
            currentPage === 1
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
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={` px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
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
  );
};

export default Listings;

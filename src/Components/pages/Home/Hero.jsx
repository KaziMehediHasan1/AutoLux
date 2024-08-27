import HeroImg from "../../../assets/slider51.png.png";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-[#EEF1FB] w-full md:h-[741.34px] flex-shrink-0 relative font-primary">
      <div className="top-20 md:top-28 absolute md:left-[33%] left-[17%] py-10">
        <p className="text-md md:text-center font-medium text-gray-500">
          Find cars for sale and for rent near you
        </p>
        <h2 className="text-7xl font-semibold">Find Your Dream Car</h2>
      </div>
      {/* search card */}
      <div className="md:top-72 top-80 absolute md:left-[29%] left-[17%] mx-auto w-[400px] py-1 sm:w-[550px] lg:w-[820px] lg:py-3  bg-white rounded-full shadow-md shadow-blue-200 hidden sm:block">
        <div className="grid grid-cols-4">
          <button>Used Cars</button>
          <button>Any Makes</button>
          <button>Any Models</button>
          <div className="flex items-center justify-between pr-4">
            <button>All Prices</button>
            <IoIosSearch className="bg-blue-500 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:p-2 sm:p-1 rounded-full text-white cursor-pointer"></IoIosSearch>
          </div>
        </div>
      </div>

      <img src={HeroImg} alt="hero-image" className="mx-auto pt-[400px]" />
    </div>
  );
};

export default Hero;

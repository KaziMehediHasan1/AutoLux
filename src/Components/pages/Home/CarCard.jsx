import { NavLink } from "react-router-dom";
import car1 from "../../../assets/electric-car.svg.svg";
import car2 from "../../../assets/electric-car2.svg.svg";
const CarCard = () => {
  return (
    <div className="max-w-[1320px] mt-8 md:mt-20 mx-auto">
      <div className="md:flex md:gap-10 grid grid-cols-1 gap-10 px-8">
        <div className="md:w-[675px] w-80 bg-[#E9F2FF] mx-auto rounded-lg p-10">
          <h2 className="text-2xl font-bold">Are You Looking For a Car ?</h2>
          <p className="mt-4 font-medium text-gray-500">
            We are committed to providing our customers with <br /> exceptional
            service.
          </p>
          <div className="flex justify-between items-center">
            <NavLink
              to="/listing"
              className=" rounded-lg bg-blue-700 text-white px-3 py-2 h-10"
            >
              Get Started
            </NavLink>
            <img src={car1} className="w-20" />
          </div>

          {/* second card */}
        </div>
        <div className="md:w-[675px] w-80 bg-[#FFE9F3] mx-auto rounded-lg p-10">
          <h2 className="text-2xl font-bold">Do You Want to Sell a Car ?</h2>
          <p className="mt-4 font-medium text-gray-500">
            We are committed to providing our customers with <br /> exceptional
            service.
          </p>
          <div className="flex justify-between items-center">
            <NavLink
              to="/dashboard/add-listing"
              className=" rounded-lg bg-gray-800 text-white px-3 py-2 h-10"
            >
              Get Started
            </NavLink>
            <img src={car2} className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

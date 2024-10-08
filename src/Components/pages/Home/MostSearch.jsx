import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import carone from "../../../assets/car13-660x440.jpg.png";

import { faGasPump } from "@fortawesome/free-solid-svg-icons";
const MostSearch = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-16 font-primary">
      <h1 className="text-center font-primary font-bold text-4xl">
        The Most Searched Cars
      </h1>
      {/* tabs */}
      <div className="flex items-center text-gray-800 md:w-full border-b justify-center mt-10  lg:mx-auto">
        <Link
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-violet-600 text-violet-600"
        >
          Architecto
        </Link>
        <Link
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-gray-300"
        >
          Corrupti
        </Link>
        <Link
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-gray-300"
        >
          Excepturi
        </Link>
        <Link
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-gray-300"
        >
          Consectetur
        </Link>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 mt-10">
        <div className="w-[300px] h-[420px] flex-shrink-0 mx-auto bg-gray-900 rounded-lg">
          <div className="overflow-hidden">
          <img
            src={carone}
            alt="cars"
            className=" w-[300px] h-[218.66px] rounded-lg hover:scale-125 duration-300"
          />
          </div>
          <div className="py-4 px-4 text-white">
            <h1 className="text-white text-sm">Ford Transit – 2021</h1>
            <p className="text-sm pt-1">4.0 D5 PowerPulse Momentum 5dr AWD…</p>
            <div className=" h-[1px] border border-gray-600 mt-2"></div>
            <div className="grid grid-cols-3">
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faTachometerAlt} />
                <p className="text-center">2500 Miles</p>
              </div>
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faGasPump} />
                <p className="text-center">Petrol</p>
              </div>
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faCogs} />
                <p className="text-center">Automatic</p>
              </div>
            </div>
              <button className="w-full mt-3 py-1 bg-blue-500 rounded-md font-medium">View Details</button>
          </div>
        </div>
        <div className="w-[300px] h-[420px] flex-shrink-0 mx-auto bg-gray-900 rounded-lg">
          <div className="overflow-hidden">
          <img
            src={carone}
            alt="cars"
            className=" w-[300px] h-[218.66px] rounded-lg hover:scale-125 duration-300"
          />
          </div>
          <div className="py-4 px-4 text-white">
            <h1 className="text-white text-sm">Ford Transit – 2021</h1>
            <p className="text-sm pt-1">4.0 D5 PowerPulse Momentum 5dr AWD…</p>
            <div className=" h-[1px] border border-gray-600 mt-2"></div>
            <div className="grid grid-cols-3">
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faTachometerAlt} />
                <p className="text-center">2500 Miles</p>
              </div>
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faGasPump} />
                <p className="text-center">Petrol</p>
              </div>
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faCogs} />
                <p className="text-center">Automatic</p>
              </div>
            </div>
              <button className="w-full mt-3 py-1 bg-blue-500 rounded-md font-medium">View Details</button>
          </div>
        </div>
        <div className="w-[300px] h-[420px] flex-shrink-0 mx-auto  bg-gray-900 rounded-lg">
          <div className="overflow-hidden">
          <img
            src={carone}
            alt="cars"
            className=" w-[300px] h-[218.66px] rounded-lg hover:scale-125 duration-300"
          />
          </div>
          <div className="py-4 px-4 text-white">
            <h1 className="text-white text-sm">Ford Transit – 2021</h1>
            <p className="text-sm pt-1">4.0 D5 PowerPulse Momentum 5dr AWD…</p>
            <div className=" h-[1px] border border-gray-600 mt-2"></div>
            <div className="grid grid-cols-3">
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faTachometerAlt} />
                <p className="text-center">2500 Miles</p>
              </div>
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faGasPump} />
                <p className="text-center">Petrol</p>
              </div>
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faCogs} />
                <p className="text-center">Automatic</p>
              </div>
            </div>
              <button className="w-full mt-3 py-1 bg-blue-500 rounded-md font-medium">View Details</button>
          </div>
        </div>
        <div className="w-[300px] h-[420px] flex-shrink-0 mx-auto bg-gray-900 rounded-lg">
          <div className="overflow-hidden">
          <img
            src={carone}
            alt="cars"
            className=" w-[300px] h-[218.66px] rounded-lg hover:scale-125 duration-300"
          />
          </div>
          <div className="py-4 px-4 text-white">
            <h1 className="text-white text-sm">Ford Transit – 2021</h1>
            <p className="text-sm pt-1">4.0 D5 PowerPulse Momentum 5dr AWD…</p>
            <div className=" h-[1px] border border-gray-600 mt-2"></div>
            <div className="grid grid-cols-3">
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faTachometerAlt} />
                <p className="text-center">2500 Miles</p>
              </div>
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faGasPump} />
                <p className="text-center">Petrol</p>
              </div>
              <div className="pt-2 space-y-1 text-center">
                <FontAwesomeIcon icon={faCogs} />
                <p className="text-center">Automatic</p>
              </div>
            </div>
              <button className="w-full mt-3 py-1 bg-blue-500 rounded-md font-medium">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostSearch;

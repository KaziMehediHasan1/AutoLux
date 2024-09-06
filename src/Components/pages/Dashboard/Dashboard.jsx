import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaArrowCircleLeft, FaCarCrash } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import {
  faCarOn,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiBookmark } from "react-icons/ci";
const Dashboard = () => {
  const [onSidebar, setOnSidebar] = useState(false);

  return (
    <div className="mt-20 font-primary ">
      <Helmet>
        <title>AutoLux | Dashboard</title>
      </Helmet>
      {/* dashboard sidebar (only desktop device) */}
      <section className="flex">
        {/* sidebar */}
        <div
          className={`bg-[#190630] h-screen p-5 pt-8 ${
            !onSidebar ? "w-72" : "w-20"
          } relative duration-300 rounded-tr-md`}
        >
          <FaArrowCircleLeft
            onClick={() => setOnSidebar(!onSidebar)}
            className={`text-2xl text-white absolute bg-[050b20] rounded-full -right-2 top-5 border border-[#190530] cursor-pointer ${
              onSidebar && "rotate-180"
            }`}
          />
          <div className="inline-flex space-x-4">
            <FaCarSide
              className={`bg-amber-100 text-3xl p-1 rounded-xl ${
                onSidebar ? "animate-pulse rotate-[360deg] duration-500" : ""
              }`}
            />
            <h1
              className={`${
                onSidebar
                  ? "scale-0"
                  : "text-white text-2xl duration-300 font-semibold"
              }`}
            >
              AutoLux
            </h1>
          </div>
          {/* search */}
          <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className={`w-5 h-5 text-gray-400  ${
                  onSidebar && " text-white bg-slate-700 "
                }`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <input
              type="search"
              className={`w-full focus:outline-none py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40  focus:ring ${
                onSidebar && "hidden"
              }`}
              placeholder="Search"
            />
          </div>
          {/* bar */}
          <div
            className={`text-white ${
              onSidebar ? "mt-10" : "mt-5"
            }  grid space-y-4`}
          >
            <NavLink
              to="static-dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-gray-700"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <MdSpaceDashboard
                className={`text-3xl ${!onSidebar && "ml-2"} text-yellow-100`}
              />
              {!onSidebar && <p>Dashboard</p>}
            </NavLink>

            <NavLink
              to="my-listing"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-gray-700"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <FontAwesomeIcon
                className={`text-3xl ${!onSidebar && "ml-2"}`}
                icon={faCarOn}
              />
              {!onSidebar && <p>My Listings</p>}
            </NavLink>

            <NavLink
              to="add-listing"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-gray-700"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <FaCarCrash className={`text-3xl ${!onSidebar && "ml-2"}`} />
              {!onSidebar && <p>Add Listings</p>}
            </NavLink>

            <NavLink
              to="my-favorites"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-gray-700"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <CiBookmark className={`text-3xl ${!onSidebar && "ml-2"}`} />
              {!onSidebar && <p>MyFavorites</p>}
            </NavLink>

            <NavLink
              to="message"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-gray-700"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <LuMessagesSquare
                className={`text-3xl ${!onSidebar && "ml-2"}`}
              />
              {!onSidebar && <p>Message</p>}
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-gray-700"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`text-3xl ${!onSidebar && "ml-2"}`}
              />
              {!onSidebar && <p>My Profile</p>}
            </NavLink>
            <NavLink className="flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className={`text-3xl ${!onSidebar && "ml-2"}`}
              />
              {!onSidebar && <p>Logout</p>}
            </NavLink>
          </div>
        </div>

        {/* Content */}
        <div className="ml-6 mt-5">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

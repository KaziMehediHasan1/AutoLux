import { Helmet } from "react-helmet-async";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FaArrowCircleLeft, FaCarCrash } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { useContext, useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import {
  faCarOn,
  faCartPlus,
  faCartShopping,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiBookmark, CiPen } from "react-icons/ci";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { RiBookOpenLine } from "react-icons/ri";
import { IoCarSportOutline } from "react-icons/io5";
import { toast } from "react-toastify";
const Dashboard = () => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [onSidebar, setOnSidebar] = useState(false);
  // logout ..
  const handleLogout = () => {
    logOutUser()
      .then((result) => {
        if (result) {
          toast.success("SignOut Successfully");
          navigate(location.pathname ? location.pathname : "/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("SignOut Failed");
      });
  };
  return (
    <div className="mt-20 font-primary ">
      <Helmet>
        <title>AutoLux | Dashboard</title>
      </Helmet>
      {/* dashboard sidebar (only desktop device) */}
      <section className="flex">
        {/* sidebar */}
        <div
          className={`bg-blue-900 lg:h-[1130px] md:h-[970px] p-5 pt-8 ${
            !onSidebar ? " md:w-72 " : "w-20"
          } relative duration-300 rounded-tr-md`}
        >
          <FaArrowCircleLeft
            onClick={() => setOnSidebar(!onSidebar)}
            className={`text-2xl text-white hidden lg:block absolute bg-[050b20] rounded-full -right-2 top-5 border border-[#190530] cursor-pointer ${
              onSidebar && "rotate-180"
            }`}
          />
          <div className={`inline-flex space-x-4 ${!onSidebar && "pl-3"}`}>
            <FaCarSide
              className={`bg-amber-100 text-3xl p-1 rounded-xl ${
                onSidebar && "animate-pulse rotate-[360deg] duration-500"
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
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <MdSpaceDashboard
                className={`text-3xl ${!onSidebar && "ml-2"} text-yellow-100 `}
              />
              {!onSidebar && <p>Dashboard</p>}
            </NavLink>

            <NavLink
              to="my-listing"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <IoCarSportOutline
                className={`text-3xl ${!onSidebar && "ml-2"}`}
                icon={faCarOn}
              />
              {!onSidebar && <p>My Listings</p>}
            </NavLink>

            <NavLink
              to="add-listing"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <FaCarCrash className={`text-3xl ${!onSidebar && "ml-2"}`} />
              {!onSidebar && <p>Add Listings</p>}
            </NavLink>

            <NavLink
              to="all-blogs"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <RiBookOpenLine className={`text-3xl ${!onSidebar && "ml-2"}`} />
              {!onSidebar && <p>Blogs</p>}
            </NavLink>

            <NavLink
              to="add-blog"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <CiPen className={`text-3xl ${!onSidebar && "ml-2"}`} />
              {!onSidebar && <p>Add Blogs</p>}
            </NavLink>

            <NavLink
              to="all-product"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className={`text-2xl ${!onSidebar && "ml-2"}`}
              />
              {!onSidebar && <p>All Products</p>}
            </NavLink>
            <NavLink
              to="add-product"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <FontAwesomeIcon
                icon={faCartPlus}
                className={`text-2xl ${!onSidebar && "ml-2"}`}
              />
              {!onSidebar && <p>Add Products</p>}
            </NavLink>
            <NavLink
              to="my-favorites"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
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
                  ? "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer bg-blue-500"
                  : "flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer"
              }
            >
              <LuMessagesSquare
                className={`text-3xl ${!onSidebar && "ml-2"}`}
              />
              {!onSidebar && <p>Message</p>}
            </NavLink>

            <NavLink className="flex items-center hover:bg-gray-700 rounded-lg py-2 space-x-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className={`text-3xl ${!onSidebar && "ml-2"}`}
              />
              {!onSidebar && <button onClick={handleLogout}>Logout</button>}
            </NavLink>
          </div>
        </div>
        {/* Content */}
        <div
          className={`ml-1 md:ml-16 md:mt-5 lg:mb-5 ${
            onSidebar ? "lg:ml-36 md:ml-5" : "md:ml-1 lg:ml-5"
          }`}
        >
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

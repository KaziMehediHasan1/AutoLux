import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  const navDialog = document.getElementById("nav-dialog");
  // context to get current user and her state.
  const { currentUser, logOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  console.log(currentUser, "23");
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleMouseEnter = () => setIsOpen(true);

  // sm screen toggle bar
  const handleToggle = () => {
    navDialog.classList.toggle("hidden");
  };
  // logout.
  const handleLogout = () => {
    logOutUser()
      .then((result) => {
        if (result) {
          toast("SignOut Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("nav-bar");
    if (window.scrollY > 50) {
      navbar?.classList?.add("bg-white", "shadow-md");
      navbar?.classList?.remove("bg-transparent");
    } else {
      navbar?.classList?.add("bg-transparent");
      navbar?.classList?.remove("bg-white", "shadow-md");
    }
  });
  return (
    <nav
      id="nav-bar"
      className="flex items-center justify-between font-primary lg:px-10 px-5 p-3 text-gray-800 fixed z-10 w-full transition-all duration-500 left-0 top-0"
    >
      {/* logo */}
      <Link to="/" className="text-2xl font-primary font-semibold">
        AutoLux
      </Link>
      {/* toggle button */}
      <button
        onClick={handleToggle}
        className="text-gray-600 text-2xl md:hidden"
      >
        <CiMenuBurger></CiMenuBurger>
      </button>

      {/* Desktop navigation */}
      <div className="md:flex items-center justify-center  mx-auto lg:gap-14 md:gap-x-6 hidden">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          ref={dropdownRef}
        >
          <div className="flex items-center">
            <NavLink
              onClick={() => setIsOpen(!isOpen)}
              className={({ isActive }) =>
                isActive && isOpen
                  ? "hover:text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <RiArrowDropDownLine
              className={`${!isOpen && "rotate-180 duration-300"}`}
            />
          </div>
          {isOpen && (
            <ul className="absolute left-0 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <li>
                <Link
                  to="/service"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/accessories"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          )}
        </div>
        {currentUser && (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hover:text-blue-600 border-b-2 border-blue-600"
                : "hover:text-blue-600"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-600"
          }
          to="/membership"
        >
          Membership
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-600"
          }
          to="/blogs"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-600"
          }
          to="/shop"
        >
          Shop
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-600"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      {/* signIn , signUp*/}
      {currentUser ? (
        <div className="md:flex items-center hidden ">
          <p className="avatar hidden md:block">
            <Tooltip title="profile" placement="left-end">
              <div className="lg:w-[40px] md:w-[35px] rounded-full ring ring-offset-2">
                <img src={currentUser?.photoURL} />
              </div>
            </Tooltip>
          </p>
          <NavLink
            onClick={handleLogout}
            className="border-2 py-1 lg:px-5 md:px-2 lg:ml-4 md:ml-2 font-primary rounded-xl hover:border-blue-500 hover:duration-300 font-medium "
          >
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="border-2 py-1 px-5 font-primary rounded-xl border-blue-500 font-medium hidden md:block"
        >
          SignIn
        </NavLink>
      )}

      {/* mobile & tablet device */}
      <div
        id="nav-dialog"
        className="fixed bg-white inset-0 z-10 md:hidden hidden"
      >
        <div id="nav-bar" className="flex items-center justify-between p-3">
          <Link to="/" className="text-2xl gap-2 font-bold font-primary ">
            AutoLux
          </Link>
          <button
            onClick={handleToggle}
            className="text-gray-600 text-2xl md:hidden"
          >
            <RxCross1></RxCross1>
          </button>
        </div>
        {/* navigation bar */}

        <div className="space-y-3 p-3">
          <div className="relative left-3" onMouseEnter={handleMouseEnter}>
            <div className="flex items-center">
              <NavLink
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-blue-600"
                }
              >
                Home
              </NavLink>
              <RiArrowDropDownLine />
            </div>
            {isOpen && (
              <ul className="absolute left-0 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <li>
                  <Link
                    to="/service"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessories"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg border-b-2 border-blue-600"
                : "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            }
            to="/membership"
          >
            Membership
          </NavLink>
          {currentUser && (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg border-b-2 border-blue-600"
                  : "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg border-b-2 border-blue-600"
                : "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            }
            to="/blogs"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg border-b-2 border-blue-600"
                : "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            }
            to="/shop"
          >
            Shop
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg border-b-2 border-blue-600"
                : "hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="border h-[1px]"></div>
        {currentUser ? (
          <NavLink
            onClick={handleLogout}
            className=" py-2 px-6 font-primary  block mt-2 hover:text-blue-600 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg font-bold"
          >
            Sign Out
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className=" py-2 px-6 font-primary  block mt-2 hover:text-blue-600 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg font-bold"
          >
            SignIn
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

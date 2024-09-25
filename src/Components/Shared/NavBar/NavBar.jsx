import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  const { currentUser, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownVisible, setHomeDropdownVisible] = useState(false);
  const [isShopDropdownVisible, setShopDropdownVisible] = useState(false);
  let showHomeTimeout, hideHomeTimeout;
  let showShopTimeout, hideShopTimeout;

  const handleToggleBar = () => {
    setHomeDropdownVisible(!isHomeDropdownVisible);
    setIsMenuOpen(!isMenuOpen);
  };
  // Toggle the navigation bar in mobile view
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    setIsMenuOpen(!isMenuOpen);
    logOutUser()
      .then(() => {
        toast.success("SignOut Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add hover delay for Home and Shop dropdowns
  const handleMouseEnterHome = () => {
    clearTimeout(hideHomeTimeout);
    showHomeTimeout = setTimeout(() => {
      setHomeDropdownVisible(true);
    }, 200); // Delay before showing
  };

  const handleMouseLeaveHome = () => {
    clearTimeout(showHomeTimeout);
    hideHomeTimeout = setTimeout(() => {
      setHomeDropdownVisible(false);
    }, 200); // Delay before hiding
  };

  const handleMouseEnterShop = () => {
    clearTimeout(hideShopTimeout);
    showShopTimeout = setTimeout(() => {
      setShopDropdownVisible(true);
    }, 200); // Delay before showing
  };

  const handleMouseLeaveShop = () => {
    clearTimeout(showShopTimeout);
    hideShopTimeout = setTimeout(() => {
      setShopDropdownVisible(false);
    }, 200); // Delay before hiding
  };

  // Add scroll effect for sticky navbar
  window.addEventListener("scroll", () => {
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
      className="flex items-center justify-between font-primary lg:px-10 px-5 p-3 text-gray-800 fixed z-10 w-full transition-all duration-500 top-0 bg-white"
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-primary font-semibold">
        AutoLux
      </Link>

      {/* Toggle button for mobile */}
      <button
        onClick={handleToggleMenu}
        className="text-gray-600 text-2xl md:hidden"
      >
        {isMenuOpen ? <RxCross1 /> : <CiMenuBurger />}
      </button>

      {/* Desktop navigation */}
      <div
        className={`md:flex items-center justify-center hidden mx-auto lg:gap-14 md:gap-6`}
      >
        <div
          className="relative"
          onMouseEnter={handleMouseEnterHome}
          onMouseLeave={handleMouseLeaveHome}
        >
          <div className="flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <RiArrowDropDownLine
              className={`${
                isHomeDropdownVisible ? "rotate-180 duration-300" : ""
              }`}
            />
          </div>
          {isHomeDropdownVisible && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
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
            </ul>
          )}
        </div>

        {/* Additional Links */}
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
        <div
          className="relative"
          onMouseEnter={handleMouseEnterShop}
          onMouseLeave={handleMouseLeaveShop}
        >
          <div className="flex items-center">
            <NavLink
              to="/listing"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Listings
            </NavLink>
            <RiArrowDropDownLine
              className={`${
                isShopDropdownVisible ? "rotate-180 duration-300" : ""
              }`}
            />
          </div>
          {isShopDropdownVisible && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <li>
                <Link
                  to="/cart"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Shop
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
              ? "hover:text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-600"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      {/* SignIn, SignOut */}
      {currentUser ? (
        <div className="md:flex items-center hidden">
          <Tooltip title="profile" placement="left-end">
            <div className="lg:w-[40px] md:w-[35px] h-[35px] lg:h-[40px] rounded-full ring ring-offset-2">
              <img
                src={currentUser?.photoURL}
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </Tooltip>
          <NavLink
            onClick={handleLogout}
            className="border-2 py-1 lg:px-5 md:px-2 lg:ml-4 md:ml-2 font-primary rounded-xl hover:border-blue-500 hover:duration-300 font-medium"
          >
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="border-2 py-1 px-5 font-primary rounded-xl border-blue-500 font-medium hidden md:block"
        >
          Sign In
        </NavLink>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed bg-white inset-0 z-10 md:hidden">
          <div className="flex items-center justify-between p-3">
            <Link to="/" className="text-2xl gap-2 font-bold font-primary">
              AutoLux
            </Link>
            <button
              onClick={handleToggleMenu}
              className="text-gray-600 text-2xl"
            >
              <RxCross1 />
            </button>
          </div>

          <div className="space-y-3 p-3">
            {/* Home Dropdown */}
            <div className="relative">
              <div className="flex items-center">
                <NavLink
                  onClick={handleToggleBar}
                  className={({ isActive }) =>
                    isActive === true
                      ? `hover:text-blue-600 border-b-2 border-blue-600 ${!isMenuOpen}`
                      : "hover:text-blue-600"
                  }
                >
                  Home
                </NavLink>
                <RiArrowDropDownLine />
              </div>
              {isHomeDropdownVisible && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <li>
                    <Link
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      to="/service"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      to="/about"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Other Links */}
            <Tooltip
              title="it's not open in mobile device"
              placement="right-end"
            >
              <NavLink className="block hover:text-blue-600">Dashboard</NavLink>
            </Tooltip>
            <NavLink
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="/membership"
              className="block hover:text-blue-600"
            >
              Membership
            </NavLink>
            <NavLink
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="/blogs"
              className="block hover:text-blue-600"
            >
              Blog
            </NavLink>
            <div
              className="relative"
              onMouseEnter={handleMouseEnterShop}
              onMouseLeave={handleMouseLeaveShop}
            >
              <div className="flex items-center">
                <NavLink
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  to="/listing"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-blue-600 border-b-2 border-blue-600"
                      : "hover:text-blue-600"
                  }
                >
                  Listings
                </NavLink>
                <RiArrowDropDownLine
                  className={`${
                    isShopDropdownVisible ? "rotate-180 duration-300" : ""
                  }`}
                />
              </div>
              {isShopDropdownVisible && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <li>
                    <Link
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      to="/cart"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      to="/shop"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="/contact"
              className="block hover:text-blue-600"
            >
              Contact
            </NavLink>

            {/* Sign Out Button */}
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="border-2 py-1 px-5  font-primary rounded-xl border-blue-500 font-medium"
              >
                Sign Out
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="border-2 py-1 px-5 font-primary rounded-xl border-blue-500 font-medium"
              >
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const navDialog = document.getElementById("nav-dialog");
  const handleToggle = () => {
    navDialog.classList.toggle("hidden");
  };
  return (
    <nav className="flex items-center justify-between font-primary px-10 p-3 text-gray-800 fixed z-50 w-full">
      {/* logo */}
      <Link to="/" className="text-2xl gap-2 font-primary font-semibold ">
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
      <div className="md:flex items-center justify-center  mx-auto gap-14 hidden">
        <NavLink className="hover:text-blue-600" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-blue-600" to="/listings">
          Listings
        </NavLink>
        <NavLink className="hover:text-blue-600" to="/blogs">
          Blog
        </NavLink>
        <NavLink className="hover:text-blue-600" to="/pages">
          Pages
        </NavLink>
        <NavLink className="hover:text-blue-600" to="/about">
          About
        </NavLink>
        <NavLink className="hover:text-blue-600" to="/contact">
          Contact
        </NavLink>
      </div>

      {/* signIn , signUp*/}
      <NavLink
        to="signIn"
        className="border-2 py-1 px-5 font-primary rounded-xl border-blue-500 font-medium hidden md:block"
      >
        SignIn
      </NavLink>

      {/* mobile & tablet device */}
      <div
        id="nav-dialog"
        className="fixed bg-white inset-0 z-10 md:hidden hidden"
      >
        <div id="nav-bar" className="flex items-center justify-between p-3">
          <Link to="/" className="text-2xl gap-2 font-medium font-primary ">
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
          <NavLink
            className="hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            to="/listings"
          >
            Listings
          </NavLink>
          <NavLink
            className="hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            to="/blogs"
          >
            Blog
          </NavLink>
          <NavLink
            className="hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            to="/pages"
          >
            Pages
          </NavLink>
          <NavLink
            className="hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="hover:text-blue-600 block px-3 py-2 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="border h-[1px]"></div>
        <NavLink
          to="signIn"
          className=" py-2 px-6 font-primary  block mt-2 hover:text-blue-600 hover:translate-x-2 duration-150 hover:bg-gray-100 rounded-lg font-bold"
        >
          SignIn
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

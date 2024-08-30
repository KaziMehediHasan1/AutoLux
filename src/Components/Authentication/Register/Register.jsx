import { Helmet } from "react-helmet-async";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="md:w-[500px] mx-auto w-[300px] pt-32 md:pt-36 font-primary">
      <Helmet>
        <title>AutoLux - SignUp</title>
      </Helmet>
      <div className="flex space-x-5">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-[2px] border-blue-600 " : ""
          }
          to="/login"
        >
          SignIn
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "border-b-[2px] border-blue-600 " : ""
          }
        >
          Register
        </NavLink>
      </div>
      <form className="pt-5 space-y-3 ">
        <input
          type="text"
          placeholder="UserName"
          defaultValue="Kazi Mehedi "
          className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
        />
        <input
          type="text"
          placeholder="Last Name"
          defaultValue="Hasan"
          className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
        />
        <input
          type="password"
          placeholder="Password"
          defaultValue="111111122554544"
          className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
        />
        <div className="flex justify-between items-center px-3 text-sm">
          <div className="flex items-center space-x-2">
            <input type="checkbox" />
            <p>Keep me signed in </p>
          </div>

          <p className="underline text-blue-600">Lost Your Password?</p>
        </div>
        <button className="text-center border py-2 rounded-lg bg-blue-600 font-primary font-semibold text-white  md:w-[500px] w-[300px] ">
          Login
        </button>
        <div className="grid grid-cols-2 gap-x-4">
          <Link className="flex items-center text-xs md:text-sm border py-3 rounded-lg justify-center space-x-2 border-blue-600 text-blue-600">
            <FaFacebookF className="md:w-7" />
            <p>Login with Facebook</p>
          </Link>
          <Link className="flex text-xs md:text-sm items-center md:py-3 border rounded-lg justify-center space-x-2 border-yellow-800 text-yellow-800">
            <FcGoogle className="md:w-7" />
            <p>Login with Google </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

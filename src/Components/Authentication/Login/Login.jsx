import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const Login = () => {
  const { loginUser, loading } = useContext(AuthContext);
  // use react hook form and validate field.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await loginUser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser, "21no line login page");
        if (loggedInUser) {
          toast.success("LoggedIn Successful");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login Failed");
      });
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className="md:w-[500px] mx-auto w-[300px] pt-32 md:pt-36 font-primary">
      <Helmet>
        <title>AutoLux - SignIn </title>
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
        <NavLink to="/register">Register</NavLink>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-5 space-y-3">
        <div>
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Email"
            className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
          />
          {errors.name && (
            <p className="text-gray-500">please write your mail id</p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
          />
          {errors.password && (
            <p className="text-gray-500">please write your password first</p>
          )}
        </div>
        <div className="flex justify-between items-center px-3 text-sm">
          <div className="flex items-center space-x-2">
            <input {...register("check", { required: true })} type="checkbox" />
            <p>Keep me signed in </p>
            {errors.check && (
              <p className="text-blue-500">
                || please checked this and then login{" "}
              </p>
            )}
          </div>
          <p className="underline text-blue-600">Lost your password?</p>
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

export default Login;

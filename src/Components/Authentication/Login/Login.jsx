import { Helmet } from "react-helmet-async";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import UseAxiosPublic from "../../Hooks/useAxiosPublic/UseAxiosPublic";
const Login = () => {
  const { loginUser, loading, GoogleLogin, FBLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  // use react hook form and validate field.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await loginUser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user.email;
        console.log(loggedInUser);
        
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login Failed");
      });
  };
  // google login setup..
  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        if (result?.user) {
          toast.success("Google login successful");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Google login unsuccessful");
      });
  };

  // Facebook Login system..
  const handleFBLogin = () => {
    FBLogin()
      .then((result) => {
        if (result?.user) {
          toast.success("Facebook login successful");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Facebook login failed");
      });
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="md:w-[500px] mx-auto w-[300px] pt-32 md:pt-44 md:pb-28 font-primary">
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
          <button
            onClick={handleFBLogin}
            className="flex items-center text-xs md:text-sm border py-3 rounded-lg justify-center space-x-2 border-blue-600 text-blue-600"
          >
            <FaFacebookF className="md:w-7" />
            <p>Login with Facebook</p>
          </button>
          <button
            onClick={handleGoogleLogin}
            className="flex text-xs md:text-sm items-center md:py-3 border rounded-lg justify-center space-x-2 border-yellow-800 text-yellow-800"
          >
            <FcGoogle className="md:w-7" />
            <p>Login with Google </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

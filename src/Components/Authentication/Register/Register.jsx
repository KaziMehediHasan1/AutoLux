import { Helmet } from "react-helmet-async";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
const Register = () => {
  // register user using react hook form and validation..
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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
      <form onSubmit={handleSubmit(onSubmit)} className="pt-5 space-y-3 ">
        <div>
          <input
            type="text"
            placeholder="UserName"
            defaultValue="Kazi Mehedi"
            {...register("firstName", {
              required: true,
              pattern: {
                message: "FirstName is required",
              },
            })}
            className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
          />
          {errors.firstName && <p>FirstName is required</p>}
        </div>
        <input
          type="text"
          placeholder="Last Name"
          defaultValue="Hasan"
          {...register("lastName")}
          className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
        />
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("Email", { required: true })}
            className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
          />
          {errors.Email && <p>Email is required</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain at least one letter and one number",
              },
            })}
            className="border px-20 py-2 rounded-lg md:w-[500px] w-[300px]"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="flex justify-between items-center px-3 text-sm">
          <div className="flex items-center space-x-2">
            <input {...register("check", { required: true })} type="checkbox" />
            <p>Keep me signed in </p>
            {errors.check&& <p className="text-blue-600">||  please checked this</p>}
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

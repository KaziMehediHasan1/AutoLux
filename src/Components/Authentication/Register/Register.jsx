import { Helmet } from "react-helmet-async";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import UseAxiosPublic from "../../Hooks/useAxiosPublic/UseAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const { registerUser, loading, FBLogin, GoogleLogin, updateUser } =
    useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  // register user using react hook form and validation..
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data?.image);
    const imageFile = { image: data?.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const imagePath = res?.data?.data?.url;
      await registerUser(data.email, data.password)
        .then((result) => {
          const regUser = result.user;
          console.log(regUser);
          updateUser(data?.name, imagePath)
            .then(() => {
              const userInfo = {
                FirstName: data?.firstName,
                LastName: data?.lastName,
                Email: data?.email,
                Photo: imagePath,
                Password: data?.password,
              };
              axiosPublic
                .post(`${import.meta.env.VITE_SERVER_PORT}/user`, userInfo)
                .then((res) => {
                  if (res.data) {
                    toast.success("Registration Successfully complete");
                    navigate("/");
                  }
                })
                .catch((err) => {
                  console.log(err.message);
                });
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
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
          navigate(location?.pathname ? location.pathname : "/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Facebook login failed");
      });
  };
  if (loading) {
    return (
      <div className="mt-[25%] md:mt-[10%] flex items-center justify-center">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="md:w-[500px] mx-auto w-[300px] pt-32 pb-10  md:pb-14 font-primary">
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
            className="border px-4 py-2 rounded-lg md:w-[500px] w-[300px]"
          />
          {errors.firstName && <p>FirstName is required</p>}
        </div>
        <input
          type="text"
          placeholder="Last Name"
          defaultValue="Hasan"
          {...register("lastName")}
          className="border px-4 py-2 rounded-lg md:w-[500px] w-[300px]"
        />
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="border px-4 py-2 rounded-lg md:w-[500px] w-[300px]"
          />
          {errors.Email && <p>Email is required</p>}
        </div>
        <div>
          <fieldset className="w-full space-y-1 text-gray-800">
            <div className="flex">
              <input
                type="file"
                {...register("image", { required: true })}
                className="px-4 py-2 border  md:w-[500px] w-[300px] border-dashed rounded-lg border-gray-300 text-gray-400"
              />
            </div>
          </fieldset>
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
            className="border px-4 py-2 rounded-lg md:w-[500px] w-[300px]"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="flex justify-between items-center px-3 text-sm">
          <div className="flex items-center space-x-2">
            <input {...register("check", { required: true })} type="checkbox" />
            <p>Keep me signed in </p>
            {errors.check && (
              <p className="text-blue-600">|| please checked this</p>
            )}
          </div>
          <p className="underline text-blue-600">Lost Your Password?</p>
        </div>
        <button className="text-center border py-2 rounded-lg bg-blue-600 font-primary font-semibold text-white  md:w-[500px] w-[300px] ">
          Register
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

export default Register;

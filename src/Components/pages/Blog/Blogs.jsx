import { Helmet } from "react-helmet-async";
import car1 from "../../../assets/car13-660x440.jpg.png";
import { NavLink } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-28">
      <Helmet>
        <title>AutoLux | Blog</title>
      </Helmet>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 lg:gap-28 md:gap-5 gap-5">
        <NavLink className="lg:w-[390px] w-[350px] lg:h-[240px]  mx-auto">
          <div className="overflow-hidden rounded-lg">
            {" "}
            <img
              src={car1}
              alt="blog"
              className="w-[390px] h-[240px] rounded-lg hover:scale-110 duration-300"
            />{" "}
          </div>
          <div className="flex space-x-3 pt-3">
            <p>Admin</p>
            <p>November 20,2023</p>
          </div>
          <p className="text-xl font-medium">
            2024 BMW ALPINA XB7 with exclusive details, extraordinary
          </p>
        </NavLink>
        <NavLink className="lg:w-[390px] w-[350px] lg:h-[240px] mx-auto">
          <div className="overflow-hidden rounded-lg">
            {" "}
            <img
              src={car1}
              alt="blog"
              className="w-[390px] h-[240px] rounded-lg hover:scale-110 duration-300"
            />{" "}
          </div>
          <div className="flex space-x-3 pt-3">
            <p>Admin</p>
            <p>November 20,2023</p>
          </div>
          <p className="text-xl font-medium">
            2024 BMW ALPINA XB7 with exclusive details, extraordinary
          </p>
        </NavLink>
        <NavLink className="lg:w-[390px] w-[350px] lg:h-[240px] mx-auto">
          <div className="overflow-hidden rounded-lg">
            {" "}
            <img
              src={car1}
              alt="blog"
              className="w-[390px] h-[240px] rounded-lg hover:scale-110 duration-300"
            />{" "}
          </div>
          <div className="flex space-x-3 pt-3">
            <p>Admin</p>
            <p>November 20,2023</p>
          </div>
          <p className="text-xl font-medium">
            2024 BMW ALPINA XB7 with exclusive details, extraordinary
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Blogs;

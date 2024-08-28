import { NavLink } from "react-router-dom";
import car1 from "../../../assets/car13-660x440.jpg.png";
const Blog = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-20">
      <h1 className="text-center text-4xl font-semibold">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        <NavLink className="w-[350px] h-[240px]">
          <div className="overflow-hidden rounded-lg">
            {" "}
            <img
              src={car1}
              alt="blog"
              className="w-[350px] h-[240px] rounded-lg hover:scale-110 duration-300"
            />{" "}
          </div>
          <div className="flex space-x-3 pt-3">
            <p>Admin</p>
            <p>November 20,2023</p>
          </div>
          <p className="text-xl font-medium">2024 BMW ALPINA XB7 with exclusive details,
          extraordinary</p>
        </NavLink>
        <NavLink className="w-[350px] h-[240px]">
          <div className="overflow-hidden rounded-lg">
            {" "}
            <img
              src={car1}
              alt="blog"
              className="w-[350px] h-[240px] rounded-lg hover:scale-110 duration-300"
            />{" "}
          </div>
          <div className="flex space-x-3 pt-3">
            <p>Admin</p>
            <p>November 20,2023</p>
          </div>
          <p className="text-xl font-medium">2024 BMW ALPINA XB7 with exclusive details,
          extraordinary</p>
        </NavLink>
        <NavLink className="w-[350px] h-[240px]">
          <div className="overflow-hidden rounded-lg">
            {" "}
            <img
              src={car1}
              alt="blog"
              className="w-[350px] h-[240px] rounded-lg hover:scale-110 duration-300"
            />{" "}
          </div>
          <div className="flex space-x-3 pt-3">
            <p>Admin</p>
            <p>November 20,2023</p>
          </div>
          <p className="text-xl font-medium">2024 BMW ALPINA XB7 with exclusive details,
          extraordinary</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Blog;

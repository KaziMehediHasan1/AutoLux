import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const ListingStep = () => {
  return (
    <div className="px-6">
      <Helmet>
        <title>Dashboard | Add Listings</title>
      </Helmet>
      {/* add listings */}
      <div className="lg:w-[1500px] md:w-[650px] w-[280px] mx-auto mb-5">
        <section className="space-y-1">
          <h2 className="md:text-4xl text-2xl font-semibold">Add Listings</h2>
          <p className="text-gray-600 text-sm md:text-xl">
            Add your car and selected to your car info
          </p>
        </section>
        {/* selected */}
        <div className="border border-gray-300 rounded-xl mt-5 py-5">
          <div className="grid md:w-96 md:ml-8 grid-cols-3 md:grid-cols-4 gap-5 text-center">
            <NavLink
              to="detail"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[1px] border-blue-500 font-semibold text-xs md:text-[16px]"
                  : "text-xs md:text-[16px]"
              }
            >
              Car Details
            </NavLink>
            <NavLink
              to="feature"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[1px] border-blue-500 font-semibold text-xs md:text-[16px]"
                  : "text-xs md:text-[16px]"
              }
            >
              Features
            </NavLink>
            <NavLink
              to="media"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[1px] border-blue-500 font-semibold text-xs md:text-[16px]"
                  : "text-xs md:text-[16px]"
              }
            >
              Media
            </NavLink>
          </div>
          <hr />
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingStep;

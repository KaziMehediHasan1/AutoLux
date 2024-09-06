import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const AddListing = () => {
  return (
    <div className="px-6">
        <Helmet>
            <title>
                Dashboard | Add Listings
            </title>
        </Helmet>
      {/* add listings */}
      <div className="w-[1320px] mx-auto">
        <section className="space-y-1">
          <h2 className="font-semibold text-4xl">Add Listings</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        </section>
        {/* selected */}
        <div className="border border-gray-300 rounded-xl mt-5 py-5">
          <div className="grid w-96 ml-5 grid-cols-2 md:grid-cols-4 gap-5 text-center border-b-[1px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-[1px] border-blue-500 font-semibold"
                  : "font-xl"
              }
            >
              Car Details
            </NavLink>
            <NavLink >Price</NavLink>
            <NavLink>Features</NavLink>
            <NavLink c>Media</NavLink>
          </div>
          <form>
            <select name="" id="">
              <option value="aaa">a</option>
              <option value="">b</option>
              <option value="">c</option>
            </select>
            <select name="" id="">
              <option value="aaa">a</option>
              <option value="">b</option>
              <option value="">c</option>
            </select>
            <select name="" id="">
              <option value="aaa">a</option>
              <option value="">b</option>
              <option value="">c</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddListing;

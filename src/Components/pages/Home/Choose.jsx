import icon1 from "../../../assets/f1.svg.svg";
import icon2 from "../../../assets/f2.svg.svg";
import icon3 from "../../../assets/f3.svg.svg";
import icon4 from "../../../assets/f4.svg.svg";
const Choose = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-[#f4f7f8] p-14 mt-20 rounded-md font-primary">
      <h1 className="text-4xl font-bold text-center">Why Choose Us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-10">
        <div className="space-y-2">
          <img src={icon1} alt="" />
          
            <h1 className="text-xl font-semibold text-gray-600">Special Financing Offers</h1>
            <p className="text-gray-600">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          
        </div>
        <div className="space-y-2">
          <img src={icon2} alt="" />
          <h1 className="text-xl font-semibold text-gray-600">Trusted Car Dealership</h1>
          <p className="text-gray-600">
            Our stress-free finance department that can find financial solutions
            to save you money.
          </p>
        </div>
        <div className="space-y-2">
          <img src={icon3} alt="" />
          <h1 className="text-xl font-semibold text-gray-600">Transparent Pricing</h1>
          <p className="text-gray-600">
            Our stress-free finance department that can find financial solutions
            to save you money.
          </p>
        </div>
        <div className="space-y-2">
          <img src={icon4} alt="" />
          <h1 className="text-xl font-semibold text-gray-600">Expert Car Service</h1>
          <p className="text-gray-600">
            Our stress-free finance department that can find financial solutions
            to save you money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;

import { RiArrowDropDownFill } from "react-icons/ri";
import HeroImg from "../../../assets/slider51.png.png";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [condition, setCondition] = useState();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [currentPage, setCurrentPage] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    const queryParams = new URLSearchParams({
      condition,
      make,
      model,
      price,
    }).toString();
    // Navigate to the listing page with query params
    navigate(`/listing?${queryParams}`);
  };

  return (
    <div className="bg-[#EEF1FB] w-full lg:h-[741.34px] flex-shrink-0 relative font-primary">
      <div className="top-20 md:top-20 lg:top-28 absolute lg:left-[33%] left-[13%] py-10 space-y-4 md:space-y-0">
        <p className="text-md md:text-center font-medium text-gray-500 pl-2 ">
          Find cars for sale and for rent near you
        </p>
        <h2 className="lg:text-7xl text-6xl font-semibold">Find Your Dream Car</h2>
      </div>
      {/* search card */}
      <div className="lg:top-72 md:top-[250px]  absolute lg:left-[29%] left-[14%] mx-auto py-2 md:px-5 lg:px-2 md:w-[580px] lg:w-[820px] lg:py-3  bg-white rounded-full shadow-md shadow-blue-200 hidden sm:block">
        <form onSubmit={handleSubmit}>
          <ul className="grid grid-cols-4">
            <li className="flex items-center">
              <select
                name="condition"
                onChange={(e) => setCondition(e.target.value)}
                className="border-none cursor-pointer  bg-transparent outline-none appearance-none font-primary"
              >
                <option selected value="">
                  Condition
                </option>
                <option value="Used">Used</option>
                <option value="New">New</option>
                <option value="Certified Pre-Owned">Certified Pre-Owned</option>
                <option value="Salvage">Salvage</option>
                <option value="Rebuilt">Rebuilt</option>
              </select>
              <RiArrowDropDownFill className="text-xl" />
            </li>
            <li className="flex items-center">
              <select
                name="make"
                onChange={(e) => setMake(e.target.value)}
                className="border-none cursor-pointer  bg-transparent outline-none appearance-none"
              >
                <option selected value="">
                  Any Make
                </option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="Honda">Honda</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes Benz">Mercedes Benz</option>
              </select>
              <RiArrowDropDownFill className="text-xl" />
            </li>
            <li className="flex items-center">
              <select
                name="model"
                onChange={(e) => setModel(e.target.value)}
                className="border-none cursor-pointer  bg-transparent outline-none appearance-none"
              >
                <option selected value="">
                  Any Model
                </option>
                <option value="Camry">camry</option>
                <option value="F-150">F-150</option>
                <option value="civic">Civic</option>
                <option value="3-series">3-series</option>
                <option value="c-class">C-Class</option>
              </select>
              <RiArrowDropDownFill className="text-xl" />
            </li>
            <li className="flex items-center justify-between pr-4">
              <div className="flex items-center">
                <select
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  className="border-none cursor-pointer  bg-transparent outline-none appearance-none"
                >
                  <option selected value="">
                    All Price
                  </option>
                  <option value="250000">$1,000</option>
                  <option value="2000">$2000</option>
                  <option value="3000">$3000 </option>
                  <option value="4000">$4000</option>
                  <option value="5000">$5000</option>
                  <option value="6000">$6000</option>
                  <option value="7000">$7000</option>
                  <option value="8000">$8000</option>
                  <option value="8000">$8000 +</option>
                </select>
                <RiArrowDropDownFill className="text-xl" />
              </div>
              <button type="submit">
                <IoIosSearch className="bg-blue-500 md:h-10 md:w-10 lg:h-10 lg:w-10 lg:p-2 md:hidden lg:block rounded-full text-white cursor-pointer"></IoIosSearch>
              </button>
              <button className="bg-blue-500 lg:hidden rounded-full text-white cursor-pointer h-10 p-[10px]">
                <IoIosSearch></IoIosSearch>
              </button>
            </li>
          </ul>
        </form>
      </div>

      <img
        src={HeroImg}
        alt="hero-image"
        className="mx-auto lg:pt-[400px] pt-[420px]"
      />
    </div>
  );
};

export default Hero;

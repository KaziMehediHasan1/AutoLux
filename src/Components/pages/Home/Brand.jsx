import { Link } from "react-router-dom";
import img1 from "../../../assets/brand/b2.jpg.png";
import img2 from "../../../assets/brand/b3.jpg.png";
import img3 from "../../../assets/brand/b4.jpg.png";
import img4 from "../../../assets/brand/Link-1.png";
import img5 from "../../../assets/brand/Link-2.png";
import img6 from "../../../assets/brand/Link.png";
const Brand = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-44 bg-[#f4f7f8] p-28  font-primary rounded-md flex justify-between">
      <div className="space-y-5 ">
        <h1 className="text-3xl font-semibold">
          Explore Our Premium <br />
          Brands
        </h1>
        <p className="pb-4 text-gray-600 text-xl">
          Excepteur sint occaecat cupidatat non proident, <br /> sunt in culpa
          qui officia deserunt mollit anim id es
        </p>
        <Link className="bg-blue-600 py-3 px-3 text-white rounded-lg">
          Show All Brands
        </Link>
      </div>

      {/* circle */}
      <div className="grid grid-cols-2">
        <img className="col-span-2" src={img1} alt="" />
        <img className="col-span-3" src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        
      </div>
    </div>
  );
};

export default Brand;

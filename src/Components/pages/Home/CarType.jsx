import img1 from "../../../assets/bmw.svg";
import img2 from "../../../assets/Convertible.svg";
import img3 from "../../../assets/coupe.svg";
import img4 from "../../../assets/Electric.svg";
import img5 from "../../../assets/htb.svg";
import img6 from "../../../assets/hybrid.svg";
import img7 from "../../../assets/sedan.svg";
import img8 from "../../../assets/truck.svg";
import img9 from "../../../assets/van.svg";
const CarType = () => {
  return (
    <div className="max-w-screen-xl mt-14 mx-auto">
      <h1 className="font-primary font-bold text-center text-4xl">
        Browse by Type
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 mt-16">
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28">
          <img src={img1} alt="bmw" className="w-9 h-10" />
          <p>BMW</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm">
          <img src={img2} alt="" />
          <p>Convertible</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm">
          <img src={img3} alt="" />
          <p>Coupe</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm">
          <img src={img4} alt="" />
          <p>Electric</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm">
          <img src={img5} alt="" />
          <p>Hatchback</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm">
          <img src={img6} alt="" />
          <p>Hybrid</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm">
          <img src={img7} alt="" />
          <p>sedan</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm">
          <img src={img8} alt="" />
          <p>Truck</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm">
          <img src={img9} alt="" />
          <p>Van</p>
        </div>
      </div>
    </div>
  );
};

export default CarType;

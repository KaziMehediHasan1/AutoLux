import img1 from "../../../assets/bmw.svg";
import img2 from "../../../assets/Convertible.svg";
import img3 from "../../../assets/coupe.svg";
import img4 from "../../../assets/Electric.svg";
import img5 from "../../../assets/htb.svg";
import img6 from "../../../assets/hybrid.svg";
import img7 from "../../../assets/sedan.svg";
import img8 from "../../../assets/truck.svg";
import img9 from "../../../assets/van.svg";
import 'animate.css';
const CarType = () => {
  return (
    <div className="max-w-[1320px] mt-8 md:mt-28 mx-auto">
      <h1 className="font-primary font-bold text-center text-4xl">
        Browse by Type
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 mt-10 gap-5">
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28 ">
          <img src={img1} alt="bmw" className="w-9 h-10 mx-auto " />
          <p className="text-center">BMW</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28">
          <img src={img2} alt="" className="w-9 h-10 mx-auto"/>
          <p className="text-center">Convertible</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28">
          <img src={img3} alt="coupe" className="w-9 h-10 mx-auto" />
          <p className="text-center">Coupe</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28">
          <img src={img4} alt="electric" className="w-9 h-10 mx-auto"/>
          <p className="text-center">Electric</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28">
          <img src={img5} alt="hatchback" className="w-9 h-10 mx-auto"/>
          <p className="text-center">Hatchback</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28">
          <img src={img6} alt="hybrid" className="w-9 h-10 mx-auto"/>
          <p className="text-center">Hybrid</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28">
          <img src={img7} alt="sedan" className="w-9 h-10 mx-auto"/>
          <p className="text-center">sedan</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28" >
          <img src={img8} alt="truck" className="w-9 h-10 mx-auto" />
          <p className="text-center">Truck</p>
        </div>
        <div className="border mx-auto px-6 rounded-lg py-3 shadow-sm w-28">
          <img src={img9} alt="van" className="w-9 h-10 mx-auto"/>
          <p className="text-center">Van</p>
        </div>
      </div>
    </div>
  );
};

export default CarType;

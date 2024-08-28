import img1 from "../../../assets/team/team5.jpg.png";
import img2 from "../../../assets/team/team6-1.jpg.png";
import img3 from "../../../assets/team/team7.jpg.png";
import img4 from "../../../assets/team/team8.jpg.png";
import img5 from "../../../assets/team/team9.jpg.png";
const OurTeam = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-14 font-primary">
      <h1 className="text-center font-bold text-4xl">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap- mt-8">
        <div className="relative rounded-lg">
          <div className="absolute  top-3 left-5">
            <h1 className="text-xl font-semibold">Kazi Mehedi Hasan </h1>
            <p className="text-sm">Development Manger </p>
          </div>
          <img src={img1} className="h-80" />
        </div>
        <div className="relative">
          <div className="absolute  top-3 left-5">
            <h1 className="text-xl font-semibold">Kazi Mehedi Hasan </h1>
            <p className="text-sm">Development Manger </p>
          </div>
          <img src={img2} className="h-80" />
        </div>
        <div className="relative">
          <div className="absolute  top-3 left-5">
            <h1 className="text-xl font-semibold">Kazi Mehedi Hasan </h1>
            <p className="text-sm">Development Manger </p>
          </div>
          <img src={img3} className="h-80" />
        </div>

        <div className="relative">
          <div className="absolute  top-3 left-5">
            <h1 className="text-xl font-semibold">Kazi Mehedi Hasan </h1>
            <p className="text-sm">Development Manger </p>
          </div>
          <img src={img5} className="h-80" />
        </div>
        <div className="relative">
          <div className="absolute  top-3 left-5">
            <h1 className="text-xl font-semibold">Kazi Mehedi Hasan </h1>
            <p className="text-sm">Development Manger </p>
          </div>
          <img src={img4} className="h-80" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

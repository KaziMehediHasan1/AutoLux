import Blog from "./Blog";
import CarCard from "./CarCard";
import CarType from "./CarType";
import Choose from "./Choose";
import Hero from "./Hero";
import LatestCars from "./LatestCars";
import MostSearch from "./MostSearch";
import OurTeam from "./OurTeam";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CarType></CarType>
      <CarCard></CarCard>
      <MostSearch></MostSearch>
      <Choose></Choose>
      <LatestCars></LatestCars>
      <OurTeam></OurTeam>
      {/* <Blog></Blog> */}
    </div>
  );
};

export default Home;

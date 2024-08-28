import CarCard from "./CarCard";
import CarType from "./CarType";
import Choose from "./Choose";
import Hero from "./Hero";
import LatestCars from "./LatestCars";
import MostSearch from "./MostSearch";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CarType></CarType>
      <CarCard></CarCard>
      <MostSearch></MostSearch>
      <Choose></Choose>
      <LatestCars></LatestCars>
    </div>
  );
};

export default Home;

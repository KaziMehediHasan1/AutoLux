import CarCard from "./CarCard";
import CarType from "./CarType";
import Choose from "./Choose";
import Hero from "./Hero";
import MostSearch from "./MostSearch";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CarType></CarType>
      <CarCard></CarCard>
      <MostSearch></MostSearch>
      <Choose></Choose>
    </div>
  );
};

export default Home;

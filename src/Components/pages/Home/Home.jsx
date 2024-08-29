import Blog from "./Blog";
import CarCard from "./CarCard";
import CarType from "./CarType";
import Choose from "./Choose";
import Hero from "./Hero";
import Join from "./Join";
import LatestCars from "./LatestCars";
import MostSearch from "./MostSearch";
import OurTeam from "./OurTeam";
import Testimonial from "./testimonial";

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
      <Blog></Blog>
      <Testimonial></Testimonial>
      <Join></Join>
    </div>
  );
};

export default Home;

import { Helmet } from "react-helmet-async";
import Blog from "./Blog";
import CarCard from "./CarCard";
import CarType from "./CarType";
import Choose from "./Choose";
import Hero from "./Hero";
import Join from "./Join";
import LatestCars from "./LatestCars";
// import MostSearch from "./MostSearch";
import OurTeam from "./OurTeam";
import Testimonial from "./testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>AutoLux</title>
      </Helmet>
      <Hero></Hero>
      <CarType></CarType>
      <CarCard></CarCard>
      {/* <MostSearch></MostSearch> */}
      <LatestCars></LatestCars>
      <Choose></Choose>
      <OurTeam></OurTeam>
      <Blog></Blog>
      <Testimonial></Testimonial>
      <Join></Join>
      
    </div>
  );
};

export default Home;

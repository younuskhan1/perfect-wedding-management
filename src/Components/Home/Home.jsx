import Cards from "../Cards/Cards";
import Carousel from "../Carousel/Carousel";
import Features from "../Features/Features";
import MainServices from "../MainServices/MainServices";
import Venues from "../Venues/Venues";
import "./Home.css";

const Home = () => {
    return (
        <div>
          <Carousel></Carousel>
          <MainServices></MainServices>
          <Cards></Cards>
          <Features></Features>
          <Venues></Venues>
        </div>
    );
};

export default Home;
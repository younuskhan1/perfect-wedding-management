import Carousel from "../Carousel/Carousel";
import Features from "../Features/Features";
import MainServices from "../MainServices/MainServices";
import "./Home.css";

const Home = () => {
    return (
        <div>
          <Carousel></Carousel>
          <MainServices></MainServices>
          <Features></Features>
        </div>
    );
};

export default Home;
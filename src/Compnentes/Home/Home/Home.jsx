import OurPet from "../OurPet/OurPet";
import Slider from "../Slider/Slider";
import BannerTwo from "./BannerTwo/BannerTwo";
import OurService from "./Service/OurService/OurService";
import Service from "./Service/Service";
import PetAvailable from "./PetAvailable/PetAvailable";
import AboutUs from "../AboutUs/AboutUs";
import Team from "./Team/Team";
import BannerPet from "./BannerPet/BannerPet";

const Home = () => {
    return (
        <div>
          <Slider></Slider>
         <BannerTwo></BannerTwo>
         <Service></Service>
         <OurService></OurService>
         <PetAvailable></PetAvailable>
         <AboutUs></AboutUs>
         <OurPet></OurPet>
         <Team></Team>
         <BannerPet></BannerPet>
      
        </div>
    );
};

export default Home;
import { Helmet } from "react-helmet";
import PetAds from "../PetAds/PetAds";
import PetBanner from "../PetBanner/PetBanner";
import PetBannerTwo from "../PetBannerTwo/PetBannerTwo";
import PetCard from "../PetCard/PetCard";
import PetCardBanner from "../PetCardBanner/PetCardBanner";
import PetLocations from "../PetLocations/PetLocations";



const PetList = () => {
    return (

        <div>
              <Helmet>
                
                <title>PetList</title>
                
            </Helmet>
       <PetBanner></PetBanner>
       <PetBannerTwo></PetBannerTwo>

      <PetCardBanner></PetCardBanner>
      <PetCard></PetCard>
      <PetAds></PetAds>
      <PetLocations></PetLocations>
        </div>
    );
};

export default PetList;
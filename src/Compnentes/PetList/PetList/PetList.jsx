import PetAds from "../PetAds/PetAds";
import PetBanner from "../PetBanner/PetBanner";
import PetBannerTwo from "../PetBannerTwo/PetBannerTwo";
import PetCard from "../PetCard/PetCard";
import PetCardBanner from "../PetCardBanner/PetCardBanner";



const PetList = () => {
    return (
        <div>
       <PetBanner></PetBanner>
       <PetBannerTwo></PetBannerTwo>
      <PetCardBanner></PetCardBanner>
      <PetCard></PetCard>
      <PetAds></PetAds>
        </div>
    );
};

export default PetList;
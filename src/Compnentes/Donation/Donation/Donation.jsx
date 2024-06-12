import DonaitionCBanner from "../DonaitionCBanner/DonaitionCBanner";
import DonationBannerTwo from "../DonationBannerTwo/DonationBannerTwo";
import DonationCard from "../DonationCard/DonationCard";
import Featurd from "../Fetured/Featurd";


const Donation = () => {
    return (
        <div>
        <div className="fromDivNavM">
        <DonaitionCBanner></DonaitionCBanner>
           <DonationBannerTwo></DonationBannerTwo>
           <Featurd></Featurd>
           <DonationCard></DonationCard>
        </div>
        </div>
    );
};

export default Donation;
import DonaitionCBanner from "../DonaitionCBanner/DonaitionCBanner";
import DonationBannerTwo from "../DonationBannerTwo/DonationBannerTwo";
import Featurd from "../Fetured/Featurd";


const Donation = () => {
    return (
        <div>
        <div className="fromDivNavM">
        <DonaitionCBanner></DonaitionCBanner>
           <DonationBannerTwo></DonationBannerTwo>
           <Featurd></Featurd>
        </div>
        </div>
    );
};

export default Donation;

import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom";
const PetCardBanner = () => {
    return (
        <div className="px-7 max-w-7xl mx-auto  ">
         <div className="grid md:grid-cols-2 ">
         <div className="">
                <p className="text-xl font-bold text-[#88bf88]">New Listings Found</p>
                <p className="text-3xl mt-1 font-extrabold">Latest Posted Ads</p>
            </div>
        
         <div>
            <button className="fromDivNavM flex items-center text-white font-bold p-2 px-10 w-full mt-4 rounded-full btn "><Link to={"/seeAllPet"}>View All Pet</Link></button>
         </div>
         </div>
        </div>
    );
};

export default PetCardBanner;
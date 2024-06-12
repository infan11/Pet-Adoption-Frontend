import { useEffect, useState } from "react";
import AxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const DonationCard = () => {
    const axiosPublic = AxiosPublic();
   const [donation , setDonation ] = useState([]);
   useEffect(() => {
    axiosPublic.get("/donationPet")
   .then(res => {
     setDonation(res.data)
   })
   } ,[])
    return (
        <div>
             <div className="max-w-7xl mx-auto px-7  ">
      <div className="grid md:grid-cols-3 gap-5">
        {donation.length > 0 ? (
          donation.map((donations) => (
            <div key={donations._id} className=" w-80 mx-auto mt-1 cardA">
              <figure><img src={donations.photo} className="w-full h-60 fromDivNavM" alt={donations.name} /></figure>
              <div className="card-body">
                <h2 className="font-extrabold text-2xl font-mono text-white">{donations.name}</h2>
                <p className="text-xl font-bold text-white">{donations.
donationAmount}</p>
                <p className="text-[16px] text-white">Donated :  ${donations.
donated}</p>
               
                <div className="card-actions">
                  <Link className="btn fromDivNavM w-full rounded-full px-11 font-bold text-white">
                    <button className="">Donate</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white font-bold text-center mt-5">No pets available for adoption.</p>
        )}
      </div>
    </div>
        </div>
    );
};

export default DonationCard;
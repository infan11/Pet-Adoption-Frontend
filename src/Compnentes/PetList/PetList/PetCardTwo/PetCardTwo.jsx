import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { GoLocation } from "react-icons/go";
import UsePet from "../../../Hooks/UsePet/UsePet";
import AxiosPublic from "../../../Hooks/AxiosPublic/AxiosPublic";
import { ImageHook } from "../../../Hooks/ImageHook/ImageHook";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/UseAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../../Hooks/Auth/useAuth";

const PetCardTwo = ({ pets }) => {
  const [pet] = UsePet();
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  

  return (
   <div className="max-w-7xl mx-auto px-7 mt-5 min-h-screen">
      <div className="grid md:grid-cols-3 gap-5">
        {pets.length > 0 ? (
          pets.map((petAdd) => (
            <div key={petAdd._id} className="card card-compact w-80 mx-auto mt-1 cardA">
              <figure><img src={petAdd.photo} className="w-full h-60 fromDivNavM" alt={petAdd.name} /></figure>
              <div className="card-body">
                <h2 className="font-extrabold text-2xl font-mono text-white">{petAdd.name}</h2>
                <p className="text-xl font-bold text-white">{petAdd.category}</p>
                <p className="text-[16px] text-white">Age: {petAdd.age}</p>
                <p className="text-xl flex items-center gap-2 text-white"><GoLocation />{petAdd.location}</p>
                <div className="card-actions">
                  <Link className="btn fromDivNavM w-full rounded-full px-11 font-bold text-white" to={`/details/${petAdd._id}`}>
                    <button className="">Details</button>
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
  );
};

export default PetCardTwo;
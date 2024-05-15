import { MdOutlineLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";

const PetCard = () => {
 const [petCard , setPetCard] = useState([]);
 useEffect(() =>{
    fetch('/pet.json')
    .then(res => res.json())
    .then(data => setPetCard(data))
 } ,[])
    return (
       <div className="max-w-7xl mx-auto px-7 mt-5"> 
           <div className="grid md:grid-cols-3  gap-5 ">
             {
            petCard.map(petCards => <div key={petCards.id} className="card card-compact w-80 mx-auto mt-1 cardA">
            <figure><img src={petCards.image} className="w-full h-60  fromDivNavM " alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="font-extrabold text-2xl font-mono" >{petCards.name}</h2>
              <p className="text-xl font-bold"> Age: {petCards.age}</p>
              <p className="text-xl  flex  items-center"> <MdOutlineLocationOn /> {petCards.location}</p>
              <div className="card-actions ">
                <button className="btn fromDivNav w-full rounded-full px-11 font-bold text-white">VIEW DETAILS </button>
              </div>
            </div>
          </div>)
             }
           </div>
       </div>
    );
};

export default PetCard;
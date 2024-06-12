import { useEffect, useState } from "react";
import UsePet from "../../Hooks/UsePet/UsePet";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/AxiosSecure/UseAxiosSecure";
import { GoLocation } from "react-icons/go";
import useAuth from "../../Hooks/Auth/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const Details = () => {
const {id} = useParams();
const [pet , refetch] = UsePet();
const {user} = useAuth();
const [pets , setPets] = useState(null) 
const axiosSecure = UseAxiosSecure();
const navigate = useNavigate();
const location = useLocation();
useEffect(() => {
    
    fetch(`http://localhost:5000/addPet/${id}`)
    .then(res => res.json())
    .then(data => setPets(data))
}, [])
const handleAdopt = pet => {
    const { _id, name, age, category, location, short_Description, text_area, photo } = pet ;
    console.log(pet);
    if(user && user.email){
        const adoptInfo = {
            petId: _id,
            email: user.email,
            name,
            age,
            category,
            location,
            short_Description,
            text_area,
            photo
    
          }
          axiosSecure.post("/adopt" , adoptInfo)
          .then(res => {
           if(res.data.insertedId){
            refetch();
            toast.success(` Successfully Add ${pets.name}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              
          }
          
         })
            }
            else{
              Swal.fire({
                title: " Are You User ? ",
                text: "You won't be able to revert this!", 
                icon: "warning",
                color : "##ffff",
                showCancelButton: true,
                confirmButtonColor: "#308546",
                cancelButtonColor: "#d33",
                background: "rgba(0, 0, 0, 0.5)" ,
                confirmButtonText: "Yes "
              }).then((result) => {
                if (result.isConfirmed) {      
                  navigate("/login" ,{state: {form : location}})
                }
              });
            }

        }

    return (
        <div className=" min-h-screen  justify-center items-center px-7 mt-5 ">
      <div className="grid md:grid-cols-3  gap-5 border-4   ">
         <div key={pets?.id} className=" card card-compact w-80 mx-auto mt-1 cardA">
            <figure><img src={pets?.photo} className="w-full h-60  fromDivNavM " alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="font-extrabold text-2xl font-mono text-white" >{pets?.name}</h2>

              <p className="text-xl font-bold text-white">  {pets?.category}</p>
              <p className="text-[16px]  text-white"> Age: {pets?.age}</p>
              <p className="text-xl  flex  items-center gap-2 text-white"> <GoLocation />{pets?.location}</p>
              <p className="text-xl  flex  items-center gap-2 text-white"> Short Description : {pets?.short_Description}</p>
              
             
              
              <div className="card-actions ">
            
                <button onClick={() => handleAdopt(pets)} className="btn fromDivNavM w-full rounded-full px-11 font-bold text-white">Adopt</button>
              </div>

            </div>
          </div>
        
        
      </div>
    </div>
    );
};

export default Details;
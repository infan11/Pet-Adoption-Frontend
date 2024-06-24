import { RiAdminLine } from "react-icons/ri";
import UseAdoptPet from "../Hooks/UseAdoptPet/UseAdoptPet";
import { RiDeleteBin4Line } from "react-icons/ri"
import UseAxiosSecure from "../Hooks/AxiosSecure/UseAxiosSecure";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AdoptCart = () => {
    const axiosSecure = UseAxiosSecure();
    const [adoptPet , refetch] = UseAdoptPet()
    const {id} = useParams()
    const handleDeleted = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/adopt/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch();
                    }
                })
             
            }
          });
    }

    return (
        <div className="min-h-screen mx-auto fromDivNavM">
    <div>
      <h2 className="text-center font-extrabold text-4xl mb-6 mt-4">Adopt Pet {adoptPet.length}</h2>
    </div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{ adoptPet.length > 0 ? (
    adoptPet.map((adoptPets , index) =>    <tr key={adoptPets._id} className="fromDivNavM">
        <th>
          <label>
             {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={adoptPets.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-white">{adoptPets.name}</div>
              <div className="text-sm opacity-50 text-white">{adoptPets.location}</div>
            </div>
          </div>
        </td>
        <td className="text-white">
          {adoptPets.email}
          <br/>
          <span className="badge badge-ghost badge-sm text-white font-extrabold"> Age : {adoptPets.age}</span>
        </td>
        <td></td>
        <th>
        <button onClick={() => handleDeleted(adoptPets._id)} className="btn text-2xl text-white  fromDivNavM ml-3"><RiDeleteBin4Line /></button>
        </th>
      </tr>) )  : (
        <p className="text-white font-bold text-center mt-5">Empty Your Adopt Cart</p>
      )
}
   
   
      
     
    </tbody>
  
    
  </table>
</div>
       
        </div>
    );
};

export default AdoptCart;
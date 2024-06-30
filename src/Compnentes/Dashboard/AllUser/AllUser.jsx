import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/AxiosSecure/UseAxiosSecure";
import useAuth from "../../Hooks/Auth/useAuth";
import { GrUserAdmin } from "react-icons/gr";
import { RiAdminLine, RiDeleteBin4Line } from "react-icons/ri"
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
const AllUser = () => {
    const {user} = useAuth();
  const axiosSecure = UseAxiosSecure();
  const {data  : users = [] , refetch} = useQuery({
    queryKey : ['users'],
    queryFn : async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
        
    }
    
  })
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
     axiosSecure.delete(`/users/${id}`)
     .then(res => {
      console.log(res.data, "Deleted Data");
      if(res.data.deletedCount > 0){
        toast.success("Successfully user deleted ")
        refetch();
      }
     })
    }
  });
}
const handleAdmin = id => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Are You Sure!"
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.patch(`/users/admin/${id}`)
      .then(res => {
        console.log(res.data , "Make admin");
        if(res.data.matchedCount > 0){
          refetch();
             toast.success(`Succesfully Admin `)
        }
      })
     
    }
  });
}
    return (
        <div className="">
           <Helmet>
                
                <title>Dashboard | All User </title>
                
            </Helmet>
           <div className=" max-w-7xl px-32  mx-auto  grid md:grid-cols-2  justify-between  mt-10">
            <p className="font-extrabold text-2xl text-orange-400"> {users?.displayName} </p>
            <p className="font-extrabold text-xl">Total User : {users.length}</p>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{ users.length > 0 ? (
    users.map((user , index) =>    <tr key={user._id} className="fromDivNavM mb-4">
        <th>
          <label>
             {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded-full w-20 h-20 mix-blend-exclusion">
                <img src={user.photo} alt="Unavialable" />
              </div>
            </div>
            <div>
              <div className="font-bold text-white">{user.name}</div>
              <div className="text-sm opacity-50 text-white">{user.location}</div>
            </div>
          </div>
        </td>
        <td className="text-white font-bold">
          {user.email}
          <br/>
          {/* <span className="badge badge-ghost badge-sm text-white font-extrabold"> Age : {user.age}</span> */}
        </td>
        <td>

      { user.role === "admin"  ? "Admin" :  <button   onClick={() => handleAdmin(user._id)} className="btn text-2xl text-white  fromDivNavM ml-3"><GrUserAdmin /></button>}
        </td>
        <th>
        <button onClick={() => handleDeleted(user._id)} className="btn text-2xl text-white  fromDivNavM ml-3"><RiDeleteBin4Line /></button>
        </th>
      </tr>) )
      : (
        <p className="text-white font-bold text-center mt-5">No User available for Pet adoption Web Page.</p>
      )
}
   
   
      
     
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default AllUser;
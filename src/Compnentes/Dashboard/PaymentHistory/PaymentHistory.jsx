import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/Auth/useAuth";
import UseAxiosSecure from "../../Hooks/AxiosSecure/UseAxiosSecure";
import { RiDeleteBin4Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();
    const {refetch ,  data: payments } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
           
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
           axiosSecure.delete(`/payments/${id}`)
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
    return (
        <div>
           <Helmet>
                
                <title>Dashboard | Histroy </title>
                
            </Helmet>
            <div className="min-h-screen mx-auto fromDivNavM">
                <div>
                    <h2 className="text-center font-extrabold text-4xl mb-6 mt-4 text-white">Payments : {payments?.length}</h2>
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
{ payments?.length > 0 ? (
    payments.map((payment , index) =>    <tr key={payment._id} className="fromDivNavM mb-4">
        <th>
          <label>
             {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
          <td className="text-white font-bold">
          {payment.email}
          <br/>
          <span className="badge badge-ghost badge-sm text-white font-extrabold"> {payment.date}</span>
        </td>
          </div>
        </td>
        <td className="text-white font-bold">
          
Transaction Id : <span className="text-green-400">{payment.transactionId}</span>
          <br/>
          {/* <span className="badge badge-ghost badge-sm text-white font-extrabold"> Age : {payment.age}</span> */}
        </td>
        <td className="text-white font-bold">
          {payment.status}
          <br/>
         
        </td>
        <th>
        <button onClick={() => handleDeleted(payment._id)} className="btn text-2xl text-white  fromDivNavM ml-3"><RiDeleteBin4Line /></button>
        </th>
      </tr>) )
      : (
        <p className="text-white font-bold text-center mt-5">No payment available for Pet adoption Web Page.</p>
      )
}
   
   
      
     
    </tbody>
  
    
  </table>
</div>

            </div>
        </div>
    );
};

export default PaymentHistory;
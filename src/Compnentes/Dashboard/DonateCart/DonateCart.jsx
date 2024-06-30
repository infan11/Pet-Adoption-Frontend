import { Link, useParams } from "react-router-dom";
import UseDonateCartHook from "../../Hooks/UseDonateCartHook/UseDonateCartHook";
import { RiDeleteBin4Line } from "react-icons/ri"
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/AxiosSecure/UseAxiosSecure";
import { Helmet } from "react-helmet";
const DonateCart = () => {
  const [donateCart, refetch] = UseDonateCartHook();
  const totalDonate = donateCart.reduce((total, cart) => total + parseFloat(cart.donationAmount), 0);
  
  const { id } = useParams()
  const axiosSecure = UseAxiosSecure()
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
        axiosSecure.delete(`/donate/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
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
const handleSubmit = event => {
  event.preventDefault();
}

  return (
  <div>
     <Helmet>
                
                <title>Dashboard | Donate Cart </title>
                
            </Helmet>
      <div className="min-h-screen mx-auto fromDivNavM">
      <div>
        <h2 className="text-center font-extrabold text-4xl mb-6 mt-4">Donate {donateCart.length} </h2>
        <h2 className="text-center font-extrabold text-4xl mb-6 mt-4">Your Donations {totalDonate} </h2>
      </div>
   <form onSubmit={handleSubmit}>
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
            {donateCart.length > 0 ? (
              donateCart.map((donateCarts, index) => <tr key={donateCarts._id}
               
              className="fromDivNavM">
                <th>
                  <label>
                    {index + 1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img src={donateCarts.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">{donateCarts.name}</div>
                      <div className="text-sm opacity-50 text-white">{donateCarts.location}</div>
                    </div>
                  </div>
                </td>
                <td className="text-white">
                  {donateCarts.
                    donationAmount}
                  <br />
                  <span className="badge badge-ghost badge-sm text-white font-extrabold"> People Donate {donateCarts.donated}</span>
                </td>
                <td></td>
                <th>
                  <button onClick={() => handleDeleted(donateCarts._id)} className="btn text-2xl text-white  fromDivNavM ml-3"><RiDeleteBin4Line /></button>
                </th>
              </tr>)) : (
              <p className="text-white font-bold text-center mt-5 mb-7">Empty Your Adopt Cart</p>
               
            )
            }




          </tbody>


        </table>
        {donateCart.length ? <Link to={'/dashboard/payment'}>
          <button className="btn fromDivNavM w-full text-white font-bold">Pay</button>
        </Link>
       :  
       <Link>
          <button disabled className="btn fromDivNavM w-full text-white font-bold">Pay</button>
        </Link>
      }
      </div>

   </form>

    </div>
  </div>
  );
};

export default DonateCart;
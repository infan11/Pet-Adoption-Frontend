import { useEffect, useState } from "react";
import AxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import { GoLocation } from "react-icons/go";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/Auth/useAuth";
import UsePet from "../../Hooks/UsePet/UsePet";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";
import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";

const DonationCard = () => {
  const navigate = useNavigate();
  const axiosPublic = AxiosPublic();
  const { user } = useAuth();
  const [isAdmin] = UseAdmin();
  const [, refetch] = UsePet();
  const { id } = useParams();
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    axiosPublic.get("/donationPet")
      .then(res => {
        setDonation(res.data)
      })
  }, []);
  const handleDeleted = donation => {
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
        axiosPublic.delete(`/donationPet/${donation._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })

      }
    });
  }
  const handleDonatedPet = donation => {
    const { _id,
      name,
      donationAmount,
      donated,  photo  } = donation;

    console.log(donation);
    if (user && user.email) {
      const donationInfo = {
        donationId: _id,
        email: user.email,
        name,
        donationAmount,
        donated,
        photo
      }
      axiosPublic.post("/donate", donationInfo)
        .then(res => {
          if(res.data.insertedId) {
            refetch();
            toast.success(` Successfully Add ${donation.name}`, {
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

    else {
      Swal.fire({
        title: " Are You User ? ",
        text: "You won't be able to revert this!",
        icon: "warning",
        color: "##ffff",
        showCancelButton: true,
        confirmButtonColor: "#308546",
        cancelButtonColor: "#d33",
        background: "rgba(0, 0, 0, 0.5)",
        confirmButtonText: "Yes "
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } })
        }
      });
    }
  }

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
                  <p className="text-xl font-bold text-white"> Maxium Donation : {donations.
                    donationAmount}</p>
                  <p className="text-[16px] text-white">Donated People :  ${donations.
                    donated}</p>

                  <div className="card-actions">

                    {isAdmin ? <>

                      <button onClick={() => handleDeleted(donations)} className="btn fromDivNavM w-full rounded-full px-11 font-bold text-white"><MdOutlineDeleteOutline />Deleted</button>
                    </> : <>

                    </>}

                    <button onClick={() => handleDonatedPet(donations)} className="btn fromDivNavM w-full rounded-full px-11 font-bold text-white">Donate</button>

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
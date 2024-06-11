import axios from "axios";
import AxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import { ImageHook } from "../../Hooks/ImageHook/ImageHook";
import toast from "react-hot-toast";

const AddDonationPet = () => {
    const axiosPublic = AxiosPublic();
  const handleAddDonationPet = async event  => {
    event.preventDefault();
    const form = event.target;
    const petName = form.petName.value;
    const donationAmount = form.donationAmount.value;
    const donated = form.donated.value;
    const photo = form.photo.files[0];
    const imageData = await ImageHook(photo)

    // console.log(petName, donationAmount , donated, photo);
    const donationInfo = {
        name : petName,
        donationAmount : donationAmount,
        donated : donated,
        photo : imageData?.data?.display_url
    }
    axiosPublic.post("http://localhost:5000/donationPet" , donationInfo)
    .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
            toast.success('Successfully Add Donation Pet')
            form.reset();
        }
     else {
        toast.error('Add Donation Failed')
     }

    })
    
    
  }

    return (
        <div className="min-h-screen">
            <h2 className="text-center text-4xl font-extrabold mt-5 text-white">Add Donation Pets</h2>
            <div>
                <form onSubmit={handleAddDonationPet} className="card-body">
                <label className="form-control w-full ">
  <div className="label">
    <span className="label-text text-white">Select Your Donation Pet Image</span>
   
  </div>
  <input type="file" name="photo" accept="image/*" className="p-3 fromDivNavM w-full text-white font-bold " />
  <div className="label">
  </div>
</label>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Pet Name</span>
          </label>
          <input type="text" placeholder="Enter Donation Pet Name" name="petName" className="p-3  rounded fromDivNavM text-white font-bold " required />
        </div>
        <label className="form-control w-full ">
  <div className="label">
    <span  className="label-text text-white">Select Maximum Donation Amount</span>
  
  </div>
  <select name="donationAmount" className="select select-bordered text-white font-bold fromDivNavM " required>
    <option disabled selected>Select one</option>
    <option>$20</option>
    <option>$40</option>
    <option>$100</option>
    <option>$200</option>
    <option>$500</option>
    <option>$600</option>
  </select>
 
</label>
<div className="form-control">
          <label className="label">
            <span className="label-text text-white">Donated Amount</span>
          </label>
          <input type="number" placeholder="Donated Amount" name="donated" className="p-3  rounded fromDivNavM text-white font-bold " required />
        </div>
        <button className="mt-10 btn fromDivNav font-bold  text-white ">ADD DONATION PET</button>
                </form>
            </div>
        </div>
    );
};

export default AddDonationPet;
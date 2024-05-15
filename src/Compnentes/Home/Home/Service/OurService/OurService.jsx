import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import icon from '../../../../../assets/image/image/pet.jpg'
import image from '../../../../../assets/image/image/Cat.jpg'
const OurService = () => {
    return (
        <div className="">
      <div className="">
      <SectionTitle heading={"--WHAT WE OFFER-- "} subHeading={"OUR SERVICE"} imageHeading={icon} ></SectionTitle>
      </div>
     <div className="grid md:grid-cols-2  gap-10">
     <div className=" md:px-10 ml-10 lg:max-w-7xl lg:px-24 mx-auto">
        <h2 className="text-5xl font-sans font-bold">Quality Services</h2>
        <p className="text-xl mt-3">Pet services offer grooming, boarding, training, and healthcare, ensuring your pets receive <br /> excellent care and attention when needed.</p>
        
       <p className="text-[18px] mt-3">Pet services encompass a range of offerings designed to meet your pets' needs, from grooming and boarding to training and veterinary care. These services provide expert attention, ensuring your pets are healthy, well-groomed,  and happy. They offer convenience and peace of mind, knowing that your pets are in  capable hands when you can't be there.</p>
       <button className="mt-3 px-5 p-3 text-white font-bold bg-green-500 rounded-3xl">CONTACT US </button>
      </div>
      <div>
        <img className="w-[500px] " src={image} alt="" />
      </div>
     </div>
        </div>
    );
};

export default OurService;
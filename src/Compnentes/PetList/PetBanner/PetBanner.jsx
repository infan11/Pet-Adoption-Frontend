import { IoSearch } from "react-icons/io5";
const PetBanner = () => {
    return (
        <div data-aos="zoom-in">
        <div className="hero  lg:h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/9939x9n/pet-Listing-banner.jpg)'}}>
<div className="  hero-overlay bg-opacity-30"></div>
<div className="hero-content text-center text-neutral-content">
<div data-aos="zoom-out" className="max-w-md  fromDivNavM p-10 rounded-2xl ">
  <h1 className="mb-5 text-3xl text-white font-bold font-mono ">Find The Perfect Pet  For You!</h1>
    <div className="flex">
    <input type="text" placeholder="Search Your Pet " className="w-full fromDivNavM border-white border-2 p-3 px-14 text-white font-bold rounded-full bg-transparent mb-8 " />
   <div className="mt-4 font-bold text-xl border-r-2 absolute ml-4">
 <div className="mr-3">
 <IoSearch />
 </div>
   </div>
    </div>
</div>
</div>
</div>
    </div>
    );
};

export default PetBanner;
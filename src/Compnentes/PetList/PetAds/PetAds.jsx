import imageA from '../../../assets/image/petListing/petAds/image1.jpeg'
import imageB from '../../../assets/image/petListing/petAds/image-2.jpg'
const PetAds = () => {
    return (
        <div className="max-w-7xl mx-auto  lg:px-44  mt-7">

   <div className='grid md:grid-cols-2 gap-4'>

   <div className="card  w-80 mx-auto  shadow-xl image-full">
  <figure><img src={imageA} alt="Shoes" /></figure>
  <div className="card-body ">
    
    <p className='text-2xl font-bold  '>Let’s Find Your <br /> New Best Friend</p>
    <div className=" ">
      <button className="btn w-full px-9 bg-[#ff3939] font-bold  text-white border-x-8 rounded-full">Create An Account</button>
    </div>
  </div>
</div>
<div className="card  w-80 mx-auto  shadow-xl image-full">
  <figure><img src={imageB} alt="Shoes" /></figure>
  <div className="card-body ">
    
    <p className='text-2xl font-bold  '>Let’s Find Your <br /> New Best Friend</p>
    <div className=" ">
      <button className="btn w-full px-9 bg-[#000000] font-bold  text-white border-x-8 rounded-full">Create An Account</button>
    </div>
  </div>
</div>
   </div>
        </div>
    );
};

export default PetAds;
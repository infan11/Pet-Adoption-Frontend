import dog from '../../../assets/image/petListing/petLocations/banner-img-1.png';
import cat from '../../../assets/image/petListing/petLocations/banner-img-2.png';
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
const PetLocations = () => {
    return (
        <div className='mt-7  '>
            <div className='max-w-7xl fromDivNavM  mx-auto -bottom-28 relative '>
            <div className='  grid md:grid-cols-3 px-20 pt-6 gap-2 mx-auto items-center rounded-3xl ' >
                 <img className='ml-20 h-60 ' src={dog} alt="" />
                 <p className='lg:text-3xl font-extrabold ml-10 text-white'>Take <span className='bg-red-500  px-10 p-2 rounded-full'> Adopt</span> A Pet  And  Gain
                  A Friend</p>
                 <img className='h-60 ml-16' src={cat} alt="" />
            </div>
            </div>
            {/* second Part */}
<div className='fromDivNavM h-[500px]   '>
<div className='max-w-7xl mx-auto h-60  '>
<div className='flex justify-between items-center mt-36'>
<div>
  <p className='text-xl font-bold text-white'>Discover Our Cities</p>
    <p className='text-3xl font-extrabold text-white'>Find Pets By State Or Province</p>
  </div>
  <div>
    <button className='btn w-60 bg-orange-600  rounded-full font-bold text-white text-[18px] '>Explore More <FaArrowRight></FaArrowRight> </button>
</div>
</div>

 
  <div className='grid md:grid-cols-4 justify-center items-center gap-1 mt-8 '>
  <button className='btn w-80 bg-white text-black p-3 rounded-full font-bold flex justify-between items-center gap-2 hover:bg-teal-600 hover:text-white text-[16px]  '><span className='flex gap-2'><IoLocationOutline />

  California</span><span className=''><FaArrowRight></FaArrowRight></span>
</button>
<button className='btn w-80 bg-white text-black p-3 rounded-full font-bold flex justify-between items-center gap-2 hover:bg-teal-600 hover:text-white text-[16px]  '><span className='flex gap-2'><IoLocationOutline />

Manhattan</span><span className=''><FaArrowRight></FaArrowRight></span>
</button>
<button className='btn w-80 bg-white text-black p-3 rounded-full font-bold flex justify-between items-center gap-2 hover:bg-teal-600 hover:text-white text-[16px]  '><span className='flex gap-2'><IoLocationOutline />

Arlington</span><span className=''><FaArrowRight></FaArrowRight></span>
</button>
<button className='btn w-80 bg-white text-black p-3 rounded-full font-bold flex justify-between items-center gap-2 hover:bg-teal-600 hover:text-white text-[16px]  '><span className='flex gap-2'><IoLocationOutline />

Texas
</span><span className=''><FaArrowRight></FaArrowRight></span>
</button>

  </div>
  <div className='grid md:grid-cols-4 justify-center items-center gap-1 md:block hidden '>
  <button className='btn w-80 bg-white text-black p-3 rounded-full font-bold flex justify-between items-center gap-2 hover:bg-teal-600 hover:text-white text-[16px]  '><span className='flex gap-2'><IoLocationOutline />

  Florida</span><span className=''><FaArrowRight></FaArrowRight></span>
</button>
<button className='btn w-80 bg-white text-black p-3 rounded-full font-bold flex justify-between items-center gap-2 hover:bg-teal-600 hover:text-white text-[16px]  '><span className='flex gap-2'><IoLocationOutline />


Virginia</span><span className=''><FaArrowRight></FaArrowRight></span>
</button>
<button className='btn w-80 bg-white text-black p-3 rounded-full font-bold flex justify-between items-center gap-2 hover:bg-teal-600 hover:text-white text-[16px]  '><span className='flex gap-2'><IoLocationOutline />

Kansas
</span><span className=''><FaArrowRight></FaArrowRight></span>
</button>
  <button className='btn w-80 bg-white text-black p-3 rounded-full font-bold flex justify-between items-center gap-2 hover:bg-teal-600 hover:text-white text-[16px]  '><span className='flex gap-2'><IoLocationOutline />

Los Angeles</span><span className=''><FaArrowRight></FaArrowRight></span>
</button>

  </div>
  </div>
</div>
        </div>
    );
};

export default PetLocations;
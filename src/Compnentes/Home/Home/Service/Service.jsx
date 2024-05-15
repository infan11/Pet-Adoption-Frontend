import imageA from '..//../../../assets/image/image/Service-image1.jpg'
import imageB from '../../../../assets/image/image/Service-image2.jpg'
import imageC from '../../../../assets/image/image/Service-image3.jpg'
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div>
           <div className='lg:flex'>
         <div>
         <img className=' md:w-80 lg:w-[482px] border-b-4 border-blue-500' src={imageA} alt="" />
   <div className=''>
   <div className='bg-[#060607a5]    rounded-t-2xl h-[90px] relative -top-24 '>
    <p className=' font-bold text-white text-2xl  lg:text-center font-mono'>MORE INFO</p>
 
         <Link className='mt-2 md:ml-[150px]  lg:ml-[158px]  btn fromDivNav font-bold text-white text-2xl  text-center font-mono'>OUR SERVICE</Link>
    </div>
   </div>
         </div>
         <div>
         <img className=' md:w-80 lg:w-[482px] border-b-4 border-green-500' src={imageB} alt="" />
    <div className=' bg-[#060607a5]  rounded-t-2xl h-[90px] relative -top-24 '>
    <p className=' font-bold text-white text-2xl  lg:text-center font-mono'>MORE INFO</p>
 
         <Link className='mt-2 md:ml-[150px]  lg:ml-[158px]  btn fromDivNav font-bold text-white text-2xl  w-40 text-center font-mono'>ABOUT </Link>
    </div>
         </div>
            
         <div>
         <img className=' md:w-80 lg:w-[482px] border-b-4 border-red-500' src={imageC} alt="" />
    <div className='bg-[#060607a5]   rounded-t-2xl h-[90px] relative -top-24 '>
    <p className=' font-bold text-white text-2xl  lg:text-center font-mono'>MORE INFO</p>
 
         <Link className='mt-2 md:ml-[150px]  lg:ml-[158px]  btn fromDivNav font-bold text-white text-2xl  text-center font-mono w-40 '>OUR TEAM</Link>
    </div>
         </div>
            
            </div> 
            <br />
        </div>
    );
};

export default Service;
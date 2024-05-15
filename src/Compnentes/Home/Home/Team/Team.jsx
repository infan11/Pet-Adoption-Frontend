import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import icon from '../../../../assets/image/image/pet.jpg'
import imageA from '../../../../assets/image/team/team1.jpeg'
import imageB from '../../../../assets/image/team/team2.jpg'
import imageC from '../../../../assets/image/team/team3.jpg'
import imageD from '../../../../assets/image/team/team4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Team = () => {

    return (
        <div className="mt-7 bg-slate-100 px-7  " >
            <br />
        <div className="">
        <SectionTitle heading={"--QUALIFIED PROFESSIONALS--"} subHeading={"OUR TEAM"} imageHeading={icon}></SectionTitle>
        </div>
        <br />
          <div className="mt-6">
          <div className="  max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-3 ">
              <div className="">
                    <p className="font-extrabold text-5xl">Meet our professionals</p>
                    <p className="text-2xl font-bold mt-6">We have an experienced  qualified team to <br /> take care of your best friend</p>
                    
                </div>
                <div>
                    <button className="btn bg-green-500 w-full px-14 rounded-3xl  font-extrabold text-white">VIEW ALL MEMBER</button>
                </div>
              </div>
                <div className="mt-6">
                <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide>
           <div className="mb-5">
           <img className="w-80 mx-auto rounded-md" src={imageA} alt="" />
            <p className="font-bold text-xl ml-3">JHON </p>
             <p className="text-2xl text-green-500 font-bold ml-2">OWNER</p>
            <div className="divider"></div>
           <div className="flex text-2xl ml-2 gap-2">
            
           <Link><CiFacebook /></Link>
             <Link><CiInstagram /></Link>
             <Link><FaXTwitter /></Link>
           </div>
           </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="mb-5">
           <img className="w-80 mx-auto rounded-md" src={imageB} alt="" />
            <p className="font-bold text-xl ml-3">SMIT </p>
             <p className="text-2xl text-green-500 font-bold ml-2">CEO</p>
            <div className="divider"></div>
           <div className="flex text-2xl ml-2 gap-2">
            
           <Link><CiFacebook /></Link>
             <Link><CiInstagram /></Link>
             <Link><FaXTwitter /></Link>
           </div>
           </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="mb-5">
           <img className="w-80 mx-auto rounded-md" src={imageC} alt="" />
            <p className="font-bold text-xl ml-3">MEX </p>
             <p className="text-2xl text-green-500 font-bold ml-2">MENAGER</p>
            <div className="divider"></div>
           <div className="flex text-2xl ml-2 gap-2">
            
           <Link><CiFacebook /></Link>
             <Link><CiInstagram /></Link>
             <Link><FaXTwitter /></Link>
           </div>
           </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="mb-5">
           <img className="w-80 mx-auto rounded-md" src={imageD} alt="" />
            <p className="font-bold text-xl ml-3">TRUMP </p>
             <p className="text-2xl text-green-500 font-bold ml-2">DOCTOR</p>
            <div className="divider"></div>
           <div className="flex text-2xl ml-2 gap-2">
            
           <Link><CiFacebook /></Link>
             <Link><CiInstagram /></Link>
             <Link><FaXTwitter /></Link>
           </div>
           </div>
        </SwiperSlide>
        
       
      
      </Swiper>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Team;
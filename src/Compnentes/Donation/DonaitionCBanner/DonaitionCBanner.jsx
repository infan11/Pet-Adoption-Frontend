import bannerA from '../../../assets/image/donationCampagin//banner/imageA.jpg';
import bannerB from '../../../assets/image/donationCampagin//banner/imageB.jpg';
import bannerC from '../../../assets/image/donationCampagin//banner/imageC.jpg';
import bannerD from '../../../assets/image/donationCampagin//banner/imageD.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const DonaitionCBanner = () => {
    return (
        <div>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='fixed top-10'>
       <div className=''>
       <div className="hero  lg:h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/x1P7kyK/imageC.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content  mb-56 text-white">
    <div className="">
      <h1  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000" className="  mb-3 text-center mg:text-2xl   lg:text-4xl font-extrabold    px-8 p-4 rounded-full mt-1  bg-yellow-400 text-black">DONATION CAMPAGINS</h1>
      <p  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000" className="mb-3 text-white  px-6"> 
      Join us in making a difference! Support our donation campaign to provide essential resources to underprivileged communities. Your contribution can help supply food, education, and healthcare to those in need. Together, we can create a brighter future for everyone. Donate today and be a part of positive change
 </p>
      <button  data-aos="fade-up"
     data-aos-anchor-placement="bottom-center"
     data-aos-duration="5000" className="btn  text-white bg-green-600 font-bold mt-3  ml-3 rounded-full w-80 ">DONATION</button>
    </div>
  </div>
</div>
       </div>
        
        </SwiperSlide>
        <SwiperSlide>
       <div>
       <div className="hero  lg:h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/LPXN3Ng/imageB.jpg)'}}>
  <div className="hero-overlay bg-opacity-75"></div>
  <div className="hero-content ">
    <div className="">
      <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-center"
     data-aos-duration="5000" className="mb-5 text-center   text-5xl font-extrabold  bg-green-400 text-black  px-8 p-4 rounded-full  hover:animate-bounce">NEW  HOPE</h1>
      <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-center"
     data-aos-duration="5000" className="mb-5 text-white px-6">Help us give abandoned male pets a second chance! Your donation supports rescue operations, medical care, and loving homes. Join our campaign to make a difference and ensure every pet finds the love they deserve. Donate today!

</p>
      <button data-aos="fade-up"
     data-aos-anchor-placement="bottom-center"
     data-aos-duration="5000" className="btn rounded-full bg-green-400 mb-2 text-white w-80 font-bold uppercase ml-6 ">Read More</button>
    </div>
  </div>
</div>
       </div>
        
        </SwiperSlide>
        <SwiperSlide>
       <div >
       <div className="hero  lg:h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/FKy8Yrc/gallery3.jpg)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="mb-80">
         
    </div>
  </div>
</div>
       </div>
        
        </SwiperSlide>
        <SwiperSlide>
       <div >
       <div className="hero  lg:h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/8D1GVBK/cat1.jpg)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="mb-80">
      
    </div>
  </div>
</div>
       </div>
        
        </SwiperSlide>



      
      </Swiper>
        </div>
    );
};

export default DonaitionCBanner;
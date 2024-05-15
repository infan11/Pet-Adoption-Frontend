import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import icon from '../../../assets/image/image/pet.jpg'
import imageA from '../.././/../assets/image/gallery/gallery1.jpg'
import imageB from '../../../assets/image/gallery/gallery2.jpg'
import imageC from '../../../assets/image/gallery/gallery3.jpg'
import imageD from '../../../assets/image/gallery/gallery4.jpg'
import imageE from '../../../assets/image//gallery/gallery5.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const OurPet = () => {
    return (
        <div className="mt-5">
            <SectionTitle heading={'--IMAGE TOUR--'} subHeading={"GALLERY"} imageHeading={icon}></SectionTitle>
          <div className="mt-8">
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
            <img className="w-80 mx-auto rounded-md catImage" src={imageA} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img className="w-80 mx-auto rounded-md catImage" src={imageB} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img className="w-80 mx-auto rounded-md catImage" src={imageC} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img className="w-80 mx-auto rounded-md catImage" src={imageD} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img className="w-80 mx-auto rounded-md catImage" src={imageE} alt="" />
        </SwiperSlide>
        
      </Swiper>
          </div>
        </div>
    );
};

export default OurPet;
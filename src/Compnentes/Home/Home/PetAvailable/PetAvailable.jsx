import imageA from '..//../../../assets/image/cat/cat2.jpeg'
import imageB from '..//../../../assets/image/dog/dog2.jpeg'
import imageC from '..//../../../assets/image/rabbit/rabbit2.jpeg'
import imageD from '..//../../../assets/image/bird/bird1.jpeg'
import imageE from '..//../../../assets/image/fish/fish2.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';
import icon from '../../../../assets/image/image/pet.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom'
const PetAvailable = () => {
    
    return (
        <div className='mt-3'>
          <SectionTitle heading={"--GET TO KNOW US--"} subHeading={"PET AVAILABLE"} imageHeading={icon} ></SectionTitle>
            <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="card mt-2 md:max-w-7xl mx-auto lg:ml-0 w-80 bg-base-100 shadow-xl">
  <figure><img src={imageA} alt="Image Not avialable" className='catImage' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      CAT 
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Cats bring comfort, agility, curiosity, and charm to our lives.</p>
     <button className='mt-1 p-3 px-10 bg-green-500 rounded-3xl btn text-white font-bold'><Link to={'/seeAllPet'}>MORE</Link></button>
  </div>
</div></SwiperSlide>
        <SwiperSlide>
       <div className="card mt-2 md:max-w-7xl mx-auto lg:ml-10 w-80 bg-base-100 shadow-xl">
  <figure><img src={imageB} alt="Image Not avialable" className='catImage' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      DOG
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>
Dogs offer loyalty, companionship, protection, brightening our days.</p>
     <button className='mt-1 p-3 px-10 bg-green-500 rounded-3xl btn text-white font-bold'><Link to={'/seeAllPet'}>MORE</Link></button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="card mt-2 md:max-w-7xl mx-auto lg:ml-20 w-80 bg-base-100 shadow-xl">
  <figure><img src={imageC} alt="Image Not avialable" className='catImage' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      RABBIT
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Rabbits are gentle, quiet, fluffy pets with playful and affectionate .</p>
     <button className='mt-1 p-3 px-10 bg-green-500 rounded-3xl btn text-white font-bold'><Link to={'/seeAllPet'}>MORE</Link></button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="card mt-2 md:max-w-7xl mx-auto lg:ml-[116px] w-80 bg-base-100 shadow-xl">
  <figure><img src={imageD} alt="Image Not avialable" className='catImage' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      BIRD 
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Birds bring vibrant colors, joyful songs, and a sense of freedom</p>
     <button className='mt-1 p-3 px-10 bg-green-500 rounded-3xl btn text-white font-bold'><Link to={'/seeAllPet'}>MORE</Link></button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="card mt-2 md:max-w-7xl mx-auto lg:ml-[150px] w-80 bg-base-100 shadow-xl">
  <figure><img src={imageE} alt="Image Not avialable" className='catImage' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      CAT 
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Fish offer tranquil beauty, creating a serene and calming environment.</p>
     <button className='mt-1 p-3 px-10 bg-green-500 rounded-3xl btn text-white font-bold'><Link to={'/seeAllPet'}>MORE</Link></button>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default PetAvailable;
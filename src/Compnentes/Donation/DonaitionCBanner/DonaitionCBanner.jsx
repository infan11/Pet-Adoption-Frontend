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
        className="mySwiper "
      >
        <SwiperSlide>
       <div className='h-24'>
       <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/VgRy4DD/imageA.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
       </div>
        
        </SwiperSlide>
        <SwiperSlide>
       <div>
       <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/LPXN3Ng/imageB.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
       </div>
        
        </SwiperSlide>
        <SwiperSlide>
       <div>
       <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/x1P7kyK/imageC.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
       </div>
        
        </SwiperSlide>
        <SwiperSlide>
       <div>
       <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/D98KMYL/imageD.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
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
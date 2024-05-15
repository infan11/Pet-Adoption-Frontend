import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import icon from '../../../assets/image/image/pet.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import imageA from '../../../assets/image/banner/banner-1.jpeg'
import imageB from '../../../assets/image/banner/banner-2.jpeg'
import imageC from '../../../assets/image/banner/banner-3.jpeg'
const AboutUs = () => {
    
    return (
        <div className=" mt-10  bg-slate-50 rounded-t-3xl">
           <SectionTitle heading={"--GET TO KNOW US--"} subHeading={"ABOUT US"} imageHeading={icon}  ></SectionTitle>
         <div className="max-w-7xl mx-auto px-10">
         <Swiper
        style={{
          '--swiper-navigation-color': '#003300',
          '--swiper-pagination-color': '#003300',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            
          </div>
          <div className="subtitle  font-bold text-3xl mt-5 text-center" data-swiper-parallax="-200">
     
          </div>
          <div className="text mt-4 grid md:grid-cols-2" data-swiper-parallax="-100">
            <div>
                <img className="w-[500px] rounded-lg mb-28 border-4 hover:border-green-300"  src={imageA} alt="" />
            </div>
            
            <div>
                <p className="font-extrabold text-3xl mb-2 ">Your pets deserve the best</p>
            <p className="text-[15px] font-bold">
            which means providing top-notch care, quality nutrition, and plenty of love. From regular vet visits and grooming to interactive toys and healthy food, it's essential to ensure your pets lead happy, healthy lives. They give us unconditional love, so they deserve nothing but the best.
            </p>
                <p className="font-bold mt-3 text-green-400 text-2xl mb-2">Our Philosophy</p>
            <p className="text-[15px] font-bold">
            Pets like family, providing them with love, care, and respect. We believe in creating a safe, nurturing environment where pets thrive and their unique personalities shine. Their well-being is our top priority.
            </p>
                <p className="font-bold mt-3 text-green-400 text-2xl mb-2">Our Organization</p>
            <p className="text-[15px] font-bold">
            Our organization is dedicated to supporting pet well-being through rescue, adoption, and education. We focus on creating loving homes for pets in need, while promoting responsible ownership. Our team is passionate about making a positive impact on both pets and their communities.
            </p>
                <p className="font-bold mt-3 text-green-400 text-2xl mb-2">Partnerships with our team</p>
            <p className="text-[15px] font-bold">
            Partnering with our team means working with dedicated professionals who prioritize pet welfare. We foster collaborative relationships with organizations and businesses to expand our reach, offering a range of pet services and community initiatives. Together, we aim to create a world where every pet has a loving home and the care they deserve.
            </p>
            <button className='mt-8 mb-8 p-3 px-12  bg-green-500 rounded-3xl btn text-white font-bold'>MORE ABOUT US</button>
            </div>
          </div>
        </SwiperSlide>
        {/* SLIDE 2  */}
        <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
            
            </div>
            <div className="subtitle  font-bold text-3xl mt-5 text-center" data-swiper-parallax="-200">
       
            </div>
            <div className="text mt-4 grid md:grid-cols-2 gap-3" data-swiper-parallax="-100">
           
              
              <div>
                  <p className="font-extrabold text-3xl mb-2 ">Adoption Events</p>
              <p className="text-[15px] font-bold">
              
                Adoption events are community gatherings where potential pet owners meet animals in need of homes. These events feature a range of adoptable pets, allowing attendees to interact and find their perfect match. Adoption events raise awareness about pet rescue and encourage responsible pet ownership in a fun, welcoming atmosphere.
              </p>
                  <p className="font-bold mt-3 text-green-400 text-2xl mb-2">NYC Adoption Fair</p>
              <p className="text-[15px] font-bold">
              Pets like family, providing them with love, care, and respect. We believe in creating a safe, nurturing environment where pets thrive and their unique personalities shine. Their well-being is our top priority.The NYC Adoption Fair is a large-scale event where rescue organizations and shelters showcase adoptable pets. 
              </p>
                  <p className="font-bold mt-3 text-green-400 text-2xl mb-2">Bronx Adoption Fair</p>
              <p className="text-[15px] font-bold">
              The Bronx Adoption Fair connects pet lovers with adoptable animals from local shelters and rescues. It's a chance to find new pets and support animal.
              </p>
                  <p className="font-bold mt-3 text-green-400 text-2xl mb-2">Jersey Adoption Fair</p>
              <p className="text-[15px] font-bold">
              The Jersey Adoption Fair brings together various shelters and rescue groups to help pets find loving homes. Attendees can meet a wide range of adoptable animals and support local animal welfare initiatives.
              </p>
              <button className='mt-8 mb-8 p-3 px-12  bg-green-500 rounded-3xl btn text-white font-bold'>MORE ABOUT US</button>
              </div>
              <div>
                  <img className="w-[500px] rounded-lg mb-28 border-4 hover:border-green-300"  src={imageB} alt="" />
              </div>
            </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
            
          </div>
          <div className="subtitle  font-bold text-3xl mt-5 text-center" data-swiper-parallax="-200">
     
          </div>
          <div className="text mt-4 grid md:grid-cols-2" data-swiper-parallax="-100">
          
            
            <div>
                <p className="font-extrabold text-3xl mb-2 ">Testimonials
</p>
            <p className="text-[15px] font-bold">
            Our pet-related testimonials showcase the positive experiences of pet owners who found their perfect companions through our services. They reflect the joy and happiness that pets bring to their families.
            </p>
                <p className="font-bold mt-3 text-green-400 text-2xl mb-2">Lucianna Smith</p>
            <p className="text-[15px] font-bold">
            Lucianna Smith is a passionate pet advocate, dedicated to improving the lives of animals through rescue, adoption, and education.
            </p>
                <p className="font-bold mt-3 text-green-400 text-2xl mb-2">Our John Sadana</p>
            <p className="text-[15px] font-bold">
            
            John Sadana is a respected pet behaviorist known for his expertise in dog training and rehabilitation. He specializes in positive reinforcement techniques and works with pet owners to foster strong, harmonious relationships with their pets, ensuring lasting bonds.
            </p>
                <p className="font-bold mt-3 text-green-400 text-2xl mb-2">Partnerships with our team</p>
            <p className="text-[15px] font-bold">
            Partnering with our team means working with dedicated professionals who prioritize pet welfare. We foster collaborative relationships with organizations and businesses to expand our reach, offering a range of pet services and community initiatives. Together, we aim to create a world where every pet has a loving home and the care they deserve.
            </p>
            <button className='mt-8 mb-8 p-3 px-12  bg-green-500 rounded-3xl btn text-white font-bold'>MORE ABOUT US</button>
            </div>
            <div>
                <img className="w-[500px] rounded-lg mb-28 border-4 hover:border-green-300"  src={imageC} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
         </div>
        </div>
    );
};

export default AboutUs;
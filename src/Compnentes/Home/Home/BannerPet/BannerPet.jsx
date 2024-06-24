import iconA from '../../../../assets/image/image/professionel.png'
import iconB from '../../../../assets/image/image/adoptPets.png'
import iconC from '../../../../assets/image/image/award.png'
import iconD from '../../../../assets/image/image/client.png'
import UseAdoptPet from '../../../Hooks/UseDonateCartHook/UseDonateCartHook';


const BannerPet = () => {
  const [adoptPet] = UseAdoptPet();

    return (
        <div>
            <div className="hero mt-8 lg:h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/2s91DF9/banner-field.jpg)'}}>
  <div className="hero-overlay bg-opacity-45"></div>
  <div className="hero-content ">
    <div className=" grid md:grid-cols-4 md:gap-7 lg:gap-28">
      <div>
        <img className='w-32 hover:animate-spin mx-auto bg-white rounded-full' src={iconA} alt="" />
        <p className='text-center font-bold text-2xl text-white hover:text-green-300'>14</p>
        <p className='text-center font-extrabold text-3xl text-white hover:text-green-300'>Professionals</p>
      </div>
      <div>
        <img className='w-32 hover:animate-spin mx-auto border-2 bg-white rounded-full' src={iconB} alt="" />
        <p className='text-center font-bold text-2xl text-white hover:text-green-300'>{adoptPet.length}</p>
        <p className='text-center font-extrabold text-3xl text-white hover:text-green-300'>Adopet Pets</p>
      </div>
      <div>
        <img className='w-32 hover:animate-spin mx-auto bg-white rounded-full' src={iconC} alt="" />
        <p className='text-center font-bold text-2xl text-white hover:text-green-300'>10</p>
        <p className='text-center font-extrabold text-3xl text-white hover:text-green-300'>Awards</p>
      </div>
      <div>
        <img className='w-32 hover:animate-spin mx-auto bg-white p-2  rounded-full' src={iconD} alt="" />
        <p className='text-center font-bold text-2xl text-white hover:text-green-300'>1200</p>
        <p className='text-center font-extrabold text-3xl text-white hover:text-green-300'>Clients</p>
      </div>
    </div>
  </div>

</div>
        </div>
    );
};

export default BannerPet;
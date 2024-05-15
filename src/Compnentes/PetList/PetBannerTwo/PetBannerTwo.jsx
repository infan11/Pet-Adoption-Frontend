import cat from '../../../assets/image/petListing/petBannerTwoIcon/cat_Icon_1.png'
import dog from '../../../assets/image/petListing/petBannerTwoIcon/dog_icon_5.png'
import rabbit from '../../../assets/image/petListing/petBannerTwoIcon/rabbit_icon_4.png'
import bird from '../../../assets/image/petListing/petBannerTwoIcon/bird_icon_2.png'
import fish from '../../../assets/image/petListing/petBannerTwoIcon/fish_icon_3.png'
import other from '../../../assets/image/petListing/petBannerTwoIcon/other_icon_5.png'

const PetBannerTwo = () => {
    return (
        <div className="max-w-7xl relative -top-20 mx-auto fromDivNavTwo p-9 to-green-200 border-8 px-10 border-red-300">
            <div className='grid grid-cols-6'>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={cat} alt="" />
                <p className='text-center font-bold  mt-1'>Cats 0</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={rabbit} alt="" />
                <p className='text-center font-bold  mt-1'>Rabbit 0</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={dog} alt="" />
                <p className='text-center font-bold  mt-1'>Dog 0</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={bird} alt="" />
                <p className='text-center font-bold  mt-1'>Bird 0</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={fish} alt="" />
                <p className='text-center font-bold  mt-1'>Fish 0</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={other} alt="" />
                <p className='text-center font-bold  mt-1'>Other 0</p>
              </div>
            </div>
        </div>
    );
};

export default PetBannerTwo;
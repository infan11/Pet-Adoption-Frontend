import cat from '../../../assets/image/petListing/petBannerTwoIcon/cat_Icon_1.png'
import dog from '../../../assets/image/petListing/petBannerTwoIcon/dog_icon_5.png'
import rabbit from '../../../assets/image/petListing/petBannerTwoIcon/rabbit_icon_4.png'
import bird from '../../../assets/image/petListing/petBannerTwoIcon/bird_icon_2.png'
import fish from '../../../assets/image/petListing/petBannerTwoIcon/fish_icon_3.png'
import other from '../../../assets/image/petListing/petBannerTwoIcon/other_icon_5.png'
import UsePet from '../../Hooks/UsePet/UsePet'
import { Link } from 'react-router-dom'

const PetBannerTwo = () => {
  const [pet] = UsePet();
  const Dog =    pet.filter(pets => pets.category === "Dog");
const Rabbit = pet.filter(pets => pets.category === "Rabbit");
const Fish =   pet.filter(pets => pets.category === "Fish");
const Cat =    pet.filter(pets => pets.category === "Cat");
const Bird =   pet.filter(pets => pets.category === "Bird");
const Other =   pet.filter(pets => pets.category === "Other");
    return (
        <div className="max-w-7xl relative -top-20 mx-auto fromDivNavTwo p-9 to-green-200 border-8 px-10 border-red-300">
            <div className='grid grid-cols-6'>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={cat} alt="" />
                <p className='text-center font-bold  mt-1 text-white'><Link to={'/seeAllPet'}>Cats {Cat.length}</Link></p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={rabbit} alt="" />
                <p className='text-center font-bold  mt-1 text-white'>Rabbit {Rabbit.length}</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={dog} alt="" />
                <p className='text-center font-bold  mt-1 text-white'>Dog {Dog.length}</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={bird} alt="" />
                <p className='text-center font-bold  mt-1 text-white'>Bird {Bird.length}</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={fish} alt="" />
                <p className='text-center font-bold  mt-1 text-white'>Fish {Fish.length}</p>
              </div>
              <div className='w-[43px] mx-auto'>
                <img className='hover:animate-spin' src={other} alt="" />
                <p className='text-center font-bold  mt-1 text-white'>Other {Other.length}</p>
              </div>
            </div>
        </div>
    );
};

export default PetBannerTwo;
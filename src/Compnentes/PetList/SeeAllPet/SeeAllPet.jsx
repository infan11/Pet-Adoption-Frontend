


import { Helmet } from "react-helmet";
import UsePet from "../../Hooks/UsePet/UsePet";
import PetCardTwo from "../PetList/PetCardTwo/PetCardTwo";
const SeeAllPet = () => {
const [pet] = UsePet();
const Dog   =    pet.filter(pets => pets.category === "Dog") ;
const Rabbit = pet.filter(pets => pets.category ===   "Rabbit");
const Fish  =   pet.filter(pets => pets.category ===  "Fish") ;
const Cat   =    pet.filter(pets => pets.category === "Cat") ;
const Bird  =   pet.filter(pets => pets.category ===  "Bird") ; 
const Other =   pet.filter(pets => pets.category ===  "Other");



    return (
        <div>
<Helmet>
                
                <title>PetList  | See All Pet </title>
                
            </Helmet>
<div role="tablist" className="tabs tabs-bordered max-w-7xl  mx-auto">
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-white font-bold " aria-label="DOG" />
  <div role="tabpanel" className="tab-content px-6"><PetCardTwo pets={Dog}></PetCardTwo></div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab text-white font-bold" aria-label="RABBIT" checked />
  <div role="tabpanel" className="tab-content px-6"><PetCardTwo pets={Rabbit}></PetCardTwo></div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab text-white font-bold" aria-label="FISH" />
  <div role="tabpanel" className="tab-content px-6"><PetCardTwo pets={Fish}></PetCardTwo></div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-white font-bold" aria-label="CAT" />
  <div role="tabpanel" className="tab-content px-6"><PetCardTwo pets={Cat}></PetCardTwo></div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-white font-bold" aria-label="BIRD" />
  <div role="tabpanel" className="tab-content px-6"><PetCardTwo pets={Bird}></PetCardTwo></div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-white font-bold" aria-label="OTHER" />
  <div role="tabpanel" className="tab-content px-6"><PetCardTwo pets={Other}></PetCardTwo></div>
</div>
             
    
        </div>
    );
};

export default SeeAllPet;
// React-router-dom generally only deals with the path part of the URL and not the querystring, and in RRDv6 there exists a useSearchParams hook you can use to access the querystring params. You won't specify any path match params though as this should be for matching the path part of the URL. Given: path "/registration?code=testCode" <Route path="/registration" element={<Registration />} /> Example: const [searchParams] = useSearchParams(); const code = searchParams.get('code'); // "testCode"
import { IoMdAdd } from "react-icons/io";
import { ImageHook } from "../../Hooks/ImageHook/ImageHook";
import toast from "react-hot-toast";
import AxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import useAuth from "../../Hooks/Auth/useAuth";
import { Helmet } from "react-helmet";


const AddPet = () => {
const {user} = useAuth();
    const axiosPublic = AxiosPublic();
 const handleAddThePet = async event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const category = form.category.value;
    const location = form.location.value;
    const short_Description = form.short_Description.value;
    const text_area = form.text_area.value;
    const photo = form.photo.files[0];
    const imageData = await ImageHook(photo)


 
 const petInfo = {
    email :user.email ,
    name: name,
    age: age,
    category: category,
    location: location,
    short_Description: short_Description,
    text_area : text_area,
    photo: imageData?.data?.display_url
 }
    axiosPublic.post("/addPet" , petInfo)
    .then(res => {
        if(res.data.insertedId){
          console.log("send to database");
        }
        toast.success('Successfully ADD PET')
        form.reset();
    })
 } 

    return (
        <div>
          <Helmet>
                
                <title>Dashboard | Add Pet </title>
                
            </Helmet>
       <div>
        <p className="text-center mt-3 text-4xl font-extrabold text-white flex ml-6">  Add Pets <IoMdAdd /></p>
       <form onSubmit={handleAddThePet} className="card-body ">
       <label className="form-control w-full ">
  <div className="label">
    <span className="label-text text-white">Select Your Pet Image</span>
   
  </div>
  <input type="file" name="photo" accept="image/*" className=" fromDivNavM file-input file-input-bordered  fromDivNavM w-full text-white font-bold " />
  <div className="label">
  
  </div>
</label>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Pet Name</span>
          </label>
          <input type="text" placeholder="Enter Your Pet Name" name="name" className="input input-bordered  fromDivNavM text-white font-bold " required />
        </div>

        <label className="form-control w-full ">
  <div className="label">
    <span className="label-text text-white">Select Your Pet Age</span>
   
  </div>
  <select name="age" className="select select-bordered  fromDivNavM text-white font-bold " required>
    
    <option disabled selected>Select Pet Age</option>
    <option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
  </select>

</label>
<label className="form-control w-full ">
  <div className="label">
    <span  className="label-text text-white">Select Pet Category</span>
  
  </div>
  <select name="category" className="select select-bordered  fromDivNavM text-white font-bold " required>
    <option disabled selected>Select one</option>
    <option>Dog</option>
    <option>Rabbit</option>
    <option>Fish</option>
    <option>Cat</option>
    <option>Bird</option>
    <option>Other</option>
  </select>
 
</label>
<label className="form-control w-full ">
  <div className="label">
    <span  className="label-text text-white">Select Pet location</span>
  
  </div>
  <select name="location" className="select select-bordered  fromDivNavM text-white font-bold " required>
    <option disabled selected>Pick one</option>
    <option>Gulsan, Dhaka, Bangladesh</option>
<option>New York, USA</option>
<option>London, UK</option>
<option>Tokyo, Japan</option>
<option>Paris, France</option>
<option>Sydney, Australia</option>
<option>Toronto, Canada</option>
<option>Berlin, Germany</option>
<option>Mumbai, India</option>
<option>São Paulo, Brazil</option>
<option>Moscow, Russia</option>
<option>Cape Town, South Africa</option>
<option>Shanghai, China</option>
<option>Dubai, UAE</option>
<option>Rome, Italy</option>
<option>Mexico City, Mexico</option>
<option>Seoul, South Korea</option>
<option>Buenos Aires, Argentina</option>
<option>Madrid, Spain</option>
<option>Zurich, Switzerland</option>
<option>Bangkok, Thailand</option>
<option>Singapore, Singapore</option>
<option>Hong Kong, Hong Kong</option>
<option>Vienna, Austria</option>
<option>Los Angeles, USA</option>
<option>Beijing, China</option>
<option>Istanbul, Turkey</option>
<option>Jakarta, Indonesia</option>
<option>Rio de Janeiro, Brazil</option>
<option>Kuala Lumpur, Malaysia</option>
<option>Barcelona, Spain</option>
<option>Munich, Germany</option>
<option>Chicago, USA</option>
<option>Auckland, New Zealand</option>
<option>Lisbon, Portugal</option>
<option>Copenhagen, Denmark</option>
<option>Brussels, Belgium</option>
<option>Stockholm, Sweden</option>
<option>Helsinki, Finland</option>
<option>Warsaw, Poland</option>
<option>Oslo, Norway</option>
<option>Prague, Czech Republic</option>
<option>Dublin, Ireland</option>
<option>Budapest, Hungary</option>
<option>Athens, Greece</option>
<option>Bogotá, Colombia</option>
<option>Santiago, Chile</option>
<option>Lima, Peru</option>
<option>Cairo, Egypt</option>
<option>Hanoi, Vietnam</option>
<option>Manila, Philippines</option>
<option>Riyadh, Saudi Arabia</option>
<option>Doha, Qatar</option>
<option>Tel Aviv, Israel</option>
<option>Johannesburg, South Africa</option>
<option>Havana, Cuba</option>
<option>Kingston, Jamaica</option>
<option>San Francisco, USA</option>
<option>Vancouver, Canada</option>
<option>Edinburgh, UK</option>
<option>Manchester, UK</option>
<option>Brisbane, Australia</option>
<option>Perth, Australia</option>
<option>Adelaide, Australia</option>
<option>Melbourne, Australia</option>
<option>Montreal, Canada</option>
<option>Calgary, Canada</option>
<option>Ottawa, Canada</option>
<option>Quebec City, Canada</option>
<option>Mexico City, Mexico</option>
<option>Guadalajara, Mexico</option>
<option>Monterrey, Mexico</option>
<option>San José, Costa Rica</option>
<option>Panama City, Panama</option>
<option>Caracas, Venezuela</option>
<option>Quito, Ecuador</option>
<option>La Paz, Bolivia</option>
<option>Asunción, Paraguay</option>
<option>Montevideo, Uruguay</option>
<option>Brasília, Brazil</option>
<option>Salvador, Brazil</option>
<option>Recife, Brazil</option>
<option>Curitiba, Brazil</option>
<option>Medellín, Colombia</option>
<option>Cali, Colombia</option>
<option>Maracaibo, Venezuela</option>
<option>Santo Domingo, Dominican Republic</option>
<option>San Juan, Puerto Rico</option>
<option>Port-au-Prince, Haiti</option>
<option>Guatemala City, Guatemala</option>
<option>Tegucigalpa, Honduras</option>
<option>San Salvador, El Salvador</option>
<option>Managua, Nicaragua</option>
<option>Belmopan, Belize</option>
<option>San José, Guatemala</option>
<option>Yerevan, Armenia</option>
<option>Tbilisi, Georgia</option>
<option>Baku, Azerbaijan</option>
<option>Riga, Latvia</option>
<option>Vilnius, Lithuania</option>
<option>Tallinn, Estonia</option>
<option>Minsk, Belarus</option>
<option>Kiev, Ukraine</option>
<option>Bucharest, Romania</option>
<option>Sofia, Bulgaria</option>
<option>Skopje, North Macedonia</option>
<option>Belgrade, Serbia</option>
<option>Zagreb, Croatia</option>


    
  </select>
 
</label>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Short Description</span>
          </label>
          <input type="text" placeholder="Type Pet Short Description" name="short_Description" className="input input-bordered  fromDivNavM text-white font-bold " required />
        </div>
        <label className="form-control">
  <div className="label">
    <span className="label-text text-white">Your Comment</span>

  </div>
  <textarea className="textarea textarea-bordered h-24  fromDivNavM text-white" placeholder="Your Comment" required name="text_area"></textarea>
  <div className="label">
    
  </div>
</label>
        <div className="form-control mt-6">
          <button className="btn fromDivNavM text-white font-extrabold"><IoMdAdd />Add Pet</button>
        </div>
      </form>
       </div>
        </div>
    );
};

export default AddPet;
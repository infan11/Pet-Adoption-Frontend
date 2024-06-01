import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/Auth/useAuth";
import { ImageHook } from "../../Hooks/ImageHook/ImageHook";
import { Link, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/AxiosSecure/UseAxiosSecure";
import AxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
const Register = () => {
  const {createUser,googleUser,githubUser,updateProfiles} = useAuth();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic  = AxiosPublic()
  const from = location.state?.from?.pathname || "/"; 
const handleFromSubmit = async event  => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photo = form.photo.files[0];
  const imageData = await ImageHook(photo)
  const formUser = {name , email ,  password}
  console.log(formUser , imageData);
  if(password.length  <  6){
    toast.error("Please Six Characters Password")
  }
  createUser(email , password)
  .then(result => {
    const registerUser = result.user;
    console.log(registerUser); 

   updateProfiles(name, imageData?.data?.display_url)
   .then(() => {
    const userInfo = {
      name: name, 
      email : email,
      photo : imageData?.data?.display_url
  
    }
 axiosSecure.post("/users" , userInfo)
 .then(res => {
  if(res.data.insertedId){
    console.log("Send To Database");
  }
  toast.success('Successfully SignUp')
  form.reset()
 })
   } )
   navigate(from , {replace : true})
  })
  .catch(error => {
     console.log(error)
     if(error.code === "auth/email-already-in-use"){
      toast.error("Alredy User Please Try Again")
     }
  else if(error.code === "auth/network-request-failed"){
    toast.error("Please Connect Internet")
  }

  })
}
// google auth 
const handleGoogle = () => {
  googleUser()
  .then(result => {
    const googleAuth = result.user;
    console.log(googleAuth);
    const userInfo = {
       email : result.user?.email ,
       name: result.user?.displayName,
       photo: result.user?.photoURL
    }
    axiosPublic.post("/users", userInfo )
    .then(res => {
      toast.success('Successfully Google SignUp')
    })
    console.log(googleAuth , "Send To Database");
    navigate(from , {replace : true})
  })
  .catch(error => {
    console.log(error)
 
  if(error.code === "auth/network-request-failed"){
   toast.error("Please Connect Internet")
 }
 else if(error.code === "auth/cancelled-popup-request"){
  toast.error("popup cloesd by user")
 }
 })
 
  
}
// github auth 
const handleGithub = () => {
  githubUser()  
  .then(result => {
    const githubAuth = result.user;
    console.log(githubAuth);
    const userInfo = {
      email : result.user?.email ,
      name: result.user?.displayName,
      photo: result.user?.photoURL
    }
    axiosPublic.post("/users" , userInfo)
    .then(res => {
      if(res.data.insertedId){
        console.log("Send To Database");
      }
    })
    toast.success('Successfully Github SignUp')
    navigate(from , {replace : true})
  })
  .catch(error => {
    console.log(error)
    if(error.code === "auth/email-already-in-use"){
     toast.error("Alredy User Please Try Again")
    }
 else if(error.code === "auth/network-request-failed"){
   toast.error("Please Connect Internet")
 }
 })
}
    return (
        <div>
            <div className="hero min-h-screen   " style={{backgroundImage: 'url(https://i.ibb.co/Gv13swb/gallery2-Cn1-Pb-Ehk.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
    <div className="card   fromDivNavM">
      <form onSubmit={handleFromSubmit} className="card-body">
      <p className="font-bold">You Have An Account ?  Now <Link to={"/login"} className="font-bold text-white ">  SignIn</Link></p>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold text-[16px]">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Name" className=" w-60 mx-auto p-2 text-white rounded   bg-transparent border-b-2    font-bold text-[15px] px-4 text- " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold text-[16px]">Email</span>
          </label>
          <input type="email" name="email" placeholder="Example@gmail.com" className=" w-60 mx-auto p-2 text-white rounded   bg-transparent border-b-2    font-bold text-[15px] px-4 text- " required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold text-[16px]">Password</span>
          </label>
           <input type="password" placeholder="Six Characters" name="password" className=" w-60 mx-auto p-2 text-white rounded   bg-transparent border-b-2    font-bold text-[15px] px-4 text- " required />
        
        </div>
        <input type="file" name="photo"   
        accept="image/*" className="file-input text-white file-input-bordered file-input-sm w-full max-w-xs mt-6 fromDivNav " required />
        <div className="form-control mt-6">
          <button className="btn  fromDivNavM text-white px-4 rounded-full hover:text-green-800">REGISTER HERE</button>
          <div className="divider text-white">or</div>
          <button onClick={handleGoogle} className="btn  fromDivNavM text-white px-4 rounded-full hover:text-green-800"><FcGoogle /> Continue with Google</button>
          <div className="divider text-white">or</div>

          <button onClick={handleGithub} className="btn  fromDivNavM text-white px-4 rounded-full hover:text-green-800"><FaGithub /> Continue with Github</button>
        </div>
        
      </form>
      <div>
        <p></p>
      </div>
    </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Register;
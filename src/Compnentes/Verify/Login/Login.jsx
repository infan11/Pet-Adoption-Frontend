import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/Auth/useAuth";

import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const Login = () => {
  const {loginUser,googleUser,githubUser} = useAuth();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
const handleFromSubmit = async event  => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  
  const formUser = {email ,  password}
  console.log(formUser);
  if(password.length  <  6){
    toast.error("Please Six Characters Password")
  }
  loginUser(email , password)
  .then(result => {
    const registerUser = result.user;
    console.log(registerUser); 
  
    toast.success('Welcome Back')
    form.reset()
   navigate(from , {replace : true})
  })
  .catch(error => {
     console.log(error)
     if(error.code === "auth/email-already-in-use"){
      toast.error("Alredy User Please Try Again")
     }
  else if(error.code === "auth/network-request-failed"){
    toast.error("please Connect Internet")
  }
  else if(error.code === "auth/invalid-credential"){
    toast.error("Password Incorrect Try Again! ")
  }

  })
}
// google auth 
const handleGoogle = () => {
  googleUser()
  .then(result => {
    const googleAuth = result.user;
    console.log(googleAuth);
    toast.success('Welcome Back')
    navigate(from , {replace : true})
  })
  .catch(error => {
    console.log(error)
 
  if(error.code === "auth/network-request-failed"){
   toast.error("please Connect Internet")
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
    toast.success('Welcome Back')
    navigate(from , {replace : true})
  })
  .catch(error => {
    console.log(error)
    if(error.code === "auth/email-already-in-use"){
     toast.error("Alredy User Please Try Again")
    }
 else if(error.code === "auth/network-request-failed"){
   toast.error("please Connect Internet")
 }
 })
}
    return (
        <div>
          <Helmet>
                
                <title>SignIn - Pet Adopt Web </title>
                
            </Helmet>
            <div className="hero min-h-screen  " style={{backgroundImage: 'url(https://i.ibb.co/Gv13swb/gallery2-Cn1-Pb-Ehk.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
    <div className="card   fromDivNavM ">
      <form onSubmit={handleFromSubmit} className="card-body">
      <p className="font-bold">Create An Account ?  Now <Link to={"/register"} className="font-bold text-white ">  SignUp</Link></p>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold text-[16px]">Email</span>
          </label>
          <input type="email" name="email" placeholder="Example@gmail.com" className=" w-60 p-2 text-white rounded   bg-transparent border-b-2    font-bold text-[15px] px-4 text- " required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold text-[16px]">Password</span>
          </label>
           <input type="password" placeholder="Six Characters" name="password" className=" w-72 mx-auto p-2 text-white rounded   bg-transparent border-b-2    font-bold text-[15px] px-4 text- " required />
        
        </div>
        <label className="label ">
          <Link to={"/forgetpass"}className="label-text-alt link link-hover  text-white font-bold text-[16px]" >Forgot password </Link>
          </label>
        <div className="form-control mt-6">
          <button className="btn  fromDivNavM text-white px-4 rounded-full hover:text-green-800 font-bold">Continue </button>
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

export default Login;
import { NavLink , Link } from 'react-router-dom';
import logo from '../../../assets/image/logo.png'
import '../Navbar/navbar.css'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { TbArrowGuide } from "react-icons/tb";
import { MdOutlineHome } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import useAuth from '../../Hooks/Auth/useAuth';
import { MdPets } from "react-icons/md";
const Navbar = () => {
const {user , logout} = useAuth()

const handleLogout = () => {
  logout()
  .then(() => {})
  .catch(error => console.log(error))
}
  // navlinks
  const navNavLinks =  <>
  
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4  flex items-center gap-2 border-yellow-200  text-white font-bold rounded " : "flex gap-2 items-center font-bold text-white "
  }
>
<MdOutlineHome />HOME
</NavLink>
<NavLink
  to="petList"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4  flex gap-2 items-center border-yellow-200  text-white font-bold rounded" : "flex gap-2 items-center font-bold text-white   transform hover:scale-y-110"
  }
>
<CiCircleList />PET LISTING
</NavLink>
<NavLink
  to="/seeAllPet"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4  flex gap-2 items-center border-yellow-200  text-white font-bold rounded " : "flex gap-2 items-center font-bold text-white  transform hover:scale-y-110 "
  }
>
<SiGooglecampaignmanager360 />
ALL PETS
</NavLink>
<NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4  flex gap-2 items-center border-yellow-200  text-white font-bold rounded " : "flex gap-2 items-center font-bold text-white  transform hover:scale-y-110 "
  }
>
<SiGooglecampaignmanager360 />
DONAITION 
CAGPAIGNS
</NavLink>
 {
  user ? <>
  <div onClick={handleLogout}>
  <NavLink 
 
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex gap-2 items-center hover:border-b-4  border-yellow-200  text-white font-bold  rounded mt-1" : "text-white font-bold flex gap-2 items-center  " 
  }
><IoIosLogOut />
LOGOUT
</NavLink>
  </div>
  </> : <>
 
  </>
 }
  </>
    return (
        <div  data-aos="fade-down">
            <div className="navbar fromDiv  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content dropdown-hover mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navNavLinks}
      </ul>
    </div>
    <Link to={"/"} className=" text-xl"><img className='w-16' src={logo} alt="" /></Link>  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 text-white font-bold">
     {navNavLinks}
    </ul>
  </div>
  {/* navbar end */}
  <div className="navbar-end">
  {
    user ? <>
      <NavLink to={"/dashboard/adoptCart"}
 
 className={({ isActive, isPending }) =>
   isPending ? "pending" : isActive ? "text-2xl  hover:border-b-4  border-yellow-200  font-bold  rounded mt-1" : "text-white  font-bold  text-2xl  " 
 }
>
<MdPets />
</NavLink>
       <div className="dropdown dropdown-end dropdown-hover ml-5" >
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-16 rounded-full">
          <img alt="" src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm   dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80 ">
      <div className="w-24 mx-auto rounded-full ">
          <img alt=""  className='rounded-full ' src={user?.photoURL} />
        </div>
       {
        user ? <>

         <p className='ml-5 mt-6 text-white font-bold flex items-center gap-2 '><MdOutlineDriveFileRenameOutline />{user?.displayName}</p>
        <p className='ml-5 mt-2 text-white font-bold flex items-center gap-2 '><HiOutlineMailOpen />{user?.email}</p>
        <p className='ml-5 mt-2 text-white font-bold flex items-center gap-2 ' ><TbArrowGuide />{user?.uid}</p>
        <li className='ml-2 flex text-white font-bold'><NavLink to={"/dashboard"}> <LuLayoutDashboard /> Dashboard</NavLink></li>
        </> : <></>
       }
        <li className='ml-2 text-white font-bold'><NavLink><MdOutlineSettings />Settings</NavLink></li>

        {
  user ? <>
  <li onClick={handleLogout} className='ml-2 text-white font-bold'><NavLink> <IoIosLogOut />Logout</NavLink></li>
  </> : <>
  <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4  border-yellow-200  text-white font-bold rounded" : ""
  }
>
SIGNIN
</NavLink>
  </>
 }
      </ul>
    </div>
    </> : <>
   <div className='flex items-center'>
   <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4  border-yellow-200  text-white font-bold rounded" : "text-white font-bold  hover:text-yellow-200"
  }
>
LOGIN
</NavLink>
<NavLink className={"mr-4 ml-2  font-bold text-blue-300"}>OR</NavLink>
   <NavLink
  to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4  border-yellow-200  text-white font-bold  rounded hover:animate-pulse" : "text-white font-bold btn border-white btn-outline hover:bg-yellow-200" 
  }
>
SIGNUP
</NavLink>
   </div>
    </>
  }
  </div>
</div>
        </div>
    );
};

export default Navbar;

import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaPhone, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import useAuth from "../../Hooks/Auth/useAuth";
import { IoMdAdd } from "react-icons/io";
import { MdPets } from "react-icons/md";
import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";
import UseAdoptPet from "../../Hooks/UseAdoptPet/UseAdoptPet";
import UseDonateCartHook from "../../Hooks/UseDonateCartHook/UseDonateCartHook";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Helmet } from "react-helmet";
const Dashboard = () => {
  const { user } = useAuth()
  const [isAdmin] = UseAdmin();
  const [adoptCart] = UseAdoptPet();
  const [donateCart] =  UseDonateCartHook()
  console.log(isAdmin);
  const navLinks = <>

    {
      isAdmin ? <>
        <li>
          <NavLink className={" hover:bg-purple-950 text-white font-bold "} to="/dashboard/adminHome">
            <FaHome></FaHome>
            Admin Home</NavLink>
        </li>
        <li>
          <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/addPet">
            <IoMdAdd />
            Add Pet</NavLink>
        </li>
        <li>
          <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/addDonationPet">
            <IoMdAdd />
            Add Donation Pet</NavLink>
        </li>
        <li>
          <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/adoptCart">
            <MdPets />
            Adopt Cart<div className="badge badge-accent badge-outline">{adoptCart.length}</div></NavLink>
        </li>
        <li>
            <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/DonateCart">

            <BiSolidDonateHeart />
              Donate Cart <div className="badge badge-accent badge-outline">{donateCart.length}</div></NavLink>

          </li>
        <li>
          <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/contactInfo">
            <FaPhone></FaPhone>
            ContactInfo</NavLink>
        </li>
        <li>
          <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/bookings">
            <FaBook></FaBook>
            Menage Bokings</NavLink>
        </li>
        <li>
          <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/users">
            <FaUsers></FaUsers>
            All Users<div className="badge badge-accent badge-outline">{user.length}</div></NavLink>
        </li>
        <li>
            <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/history">
              <FaCalendar></FaCalendar>
              History</NavLink>
          </li>
      </>
        :
        <>
          <li>
            <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home</NavLink>
          </li>
          <li>
            <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/history">
              <FaCalendar></FaCalendar>
              History</NavLink>
          </li>
          <li>
            <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/adoptCart">

              <MdPets />
              Adopt Cart <div className="badge badge-accent badge-outline">{adoptCart.length}</div></NavLink>

          </li>
          <li>
            <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/DonateCart">

            <BiSolidDonateHeart />
              Donate Cart <div className="badge badge-accent badge-outline">{adoptCart.length}</div></NavLink>

          </li>
          <li>
            <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review</NavLink>
          </li>
      
        </>
    }
    {/* shared nav links */}
    <div className="divider"></div>
    <li>
      <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/">
        <FaHome></FaHome>
        Home</NavLink>
    </li>
    <li>
      <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/petList">
        <FaSearch></FaSearch>
        Pet Listing</NavLink>
    </li>
    <li>
      <NavLink className={"hover:bg-purple-950 text-white font-bold"} to="/order/contactUs">
        <FaEnvelope></FaEnvelope>
        Contact</NavLink>
    </li>
  </>
  return (
    <div>
       <Helmet>
                
                <title>Dashboard  </title>
                
            </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><FiMenu /></label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full fromDivNavM text-base-content">
            {/* Sidebar content here */}
            <p className="font-extrabold text-2xl text-purple-600 flex items-center gap-4"><RxDashboard /> DASHBOARD</p>
            {navLinks}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
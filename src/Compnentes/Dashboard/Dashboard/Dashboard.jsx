
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaPhone, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/Auth/useAuth";
const Dashboard = () => {
    const {user} = useAuth()
    // const [isAdmin] = true;
   
    const navLinks = <>

      {
        user ? <>
          <li>
            <NavLink className={ " hover:bg-purple-950 " } to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-purple-950"} to="/dashboard/addItems">
              <FaUtensils></FaUtensils>
              Add Items</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-purple-950"}  to="/dashboard/manageItems">
              <FaList></FaList>
              Manage Items</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-purple-950"}  to="/dashboard/contactInfo">
             <FaPhone></FaPhone>
            ContactInfo</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-purple-950"} to="/dashboard/bookings">
              <FaBook></FaBook>
              Manage Bookings</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-purple-950"} to="/dashboard/users">
              <FaUsers></FaUsers>
              All Users</NavLink>
          </li>
        </>
          :
          <>
            <li>
              <NavLink  className={"hover:bg-purple-950"}  to="/dashboard/userHome">
                <FaHome></FaHome>
                User Home</NavLink>
            </li>
            <li>
              <NavLink  className={"hover:bg-purple-950"} to="/dashboard/history">
                <FaCalendar></FaCalendar>
                Not History</NavLink>
            </li>
            <li>
              <NavLink  className={"hover:bg-purple-950"}  to="/dashboard/cart">
                
                <FaShoppingCart></FaShoppingCart>
              </NavLink>
            </li>
            <li>
              <NavLink  className={"hover:bg-purple-950"} to="/dashboard/review">
                <FaAd></FaAd>
                Add a Review</NavLink>
            </li>
            <li>
              <NavLink  className={"hover:bg-purple-950"} to="/dashboard/paymentHistory">
                <FaList></FaList>
                Real Payment History</NavLink>
            </li>
          </>
      }
      {/* shared nav links */}
      <div className="divider"></div>
      <li>
        <NavLink  className={"hover:bg-purple-950"} to="/">
          <FaHome></FaHome>
          Home</NavLink>
      </li>
      <li>
        <NavLink  className={"hover:bg-purple-950"} to="/ourMenu">
          <FaSearch></FaSearch>
          Menu</NavLink>
      </li>
      <li>
        <NavLink   className={"hover:bg-purple-950"} to="/order/contactUs">
          <FaEnvelope></FaEnvelope>
          Contact</NavLink>
      </li>
    </>
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
   
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><FiMenu /></label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full fromDivNavM text-base-content">
      {/* Sidebar content here */}
      <p className="font-extrabold text-2xl text-purple-600"> DASHBOARD</p>
     {navLinks}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
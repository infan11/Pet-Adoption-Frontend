
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
const Main = () => {
   const location = useLocation();
   const noNavbarFooter = location.pathname.includes("/register") || location.pathname.includes("/login")
   
    return (
        <div>
           {noNavbarFooter || <Navbar ></Navbar>}
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;

import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Donation from "../Donation/Donation/Donation";
import Login from "../Verify/Login/Login";
import Register from "../Verify/Register/Register";
import PetList from "../PetList/PetList/PetList";
import ForgetPass from "../Verify/ForgetPass/ForgetPass";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import MenageItems from "../Dashboard/MenageItems/MenageItems";
import ContactInfo from "../Dashboard/ContactInfo/ContactInfo";
import AllUser from "../Dashboard/AllUser/AllUser";
import AddPet from "../Dashboard/AddIPet/AddIPet";
import SeeAllPet from "../PetList/SeeAllPet/SeeAllPet";
import Details from "../PetList/Details/Details";
import AdoptCart from "../AdoptCart/AdoptCart";
import AddDonationPet from "../Dashboard/AddDonationPet/AddDonationPet";
import Search from "../PetList/Search/Search";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import DonationCard from "../Donation/DonationCard/DonationCard";
import DonateCart from "../Dashboard/DonateCart/DonateCart";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/petList",
        element: <PetList></PetList>,

      }, {
        path : "/search",
        element: <Search></Search>
      }
      ,
      {
        path: "/seeAllPet",
        element: <SeeAllPet ></SeeAllPet>
      },
      {
        path: "/donation",
        element: <PrivateRoute><Donation></Donation></PrivateRoute>
      },
      {
        path: "/details/:id",
        element: <Details></Details>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/forgetpass",
        element: <ForgetPass></ForgetPass>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
     // user panel
      {
        path: "/dashboard/adoptCart",
        element: <AdoptCart></AdoptCart>
      },
      {
        path: "/dashboard/donateCart",
        element: <DonateCart></DonateCart>
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>
      },
      {
        path: "/dashboard/history",
        element: <PaymentHistory></PaymentHistory>
      },
    
      // admin panel
      {
        path: "/dashboard/manageItems",
        element:<AdminRoutes> <MenageItems></MenageItems></AdminRoutes>
      },
      {
        path: "/dashboard/contactInfo",
        element:<AdminRoutes> <ContactInfo></ContactInfo></AdminRoutes>
      },
      {
        path: "/dashboard/addDonationPet",
        element:<AdminRoutes> <AddDonationPet></AddDonationPet></AdminRoutes>
      },
      ,
      {
        path: "/dashboard/bookings",
        element: <MenageItems></MenageItems>
      },
      {
        path: "/dashboard/adminHome",
        element: <AdminHome></AdminHome>
      },
      {
        path: "/dashboard/addPet",
        element: <AdminRoutes><AddPet></AddPet></AdminRoutes>
      },
      {
        path: "/dashboard/users",
        element:<AdminRoutes> <AllUser></AllUser></AdminRoutes>
      },
    ]
  }
]);
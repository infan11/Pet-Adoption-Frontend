
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
      {
        path: "/dashboard/adminHome",
        element: <AdminHome></AdminHome>
      },
      {
        path: "/dashboard/addPet",
        element: <AddPet></AddPet>
      },
      {
        path: "/dashboard/addDonationPet",
        element: <AddDonationPet></AddDonationPet>
      },
      {
        path: "/dashboard/adoptCart",
        element: <AdoptCart></AdoptCart>
      }
      ,
      {
        path: "/dashboard/manageItems",
        element: <MenageItems></MenageItems>
      },
      {
        path: "/dashboard/contactInfo",
        element: <ContactInfo></ContactInfo>
      },
      {
        path: "/dashboard/bookings",
        element: <MenageItems></MenageItems>
      },
      {
        path: "/dashboard/users",
        element: <AllUser></AllUser>
      },
    ]
  }
]);
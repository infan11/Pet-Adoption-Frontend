
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Donation from "../Donation/Donation/Donation";
import Login from "../Verify/Login/Login";
import Register from "../Verify/Register/Register";
import PetList from "../PetList/PetList/PetList";
import ForgetPass from "../Verify/ForgetPass/ForgetPass";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main> ,
    children: [
      {
          path: "/",
          element: <Home></Home>
      },
       {
        path: "/petList",
        element: <PetList></PetList>
       },
      {
        path: "/donation",
        element: <Donation></Donation>
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
]);
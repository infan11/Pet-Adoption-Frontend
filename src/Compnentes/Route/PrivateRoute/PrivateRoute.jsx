import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/Auth/useAuth";
import { Puff } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
   const {user, loading} = useAuth();
   const location = useLocation();
   if(loading){
    return <div className="min-h-screen justify-center  items-center text-center">
        <Puff
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
   }
   if(!user){
    return <Navigate to={"/login"} state={location?.pathname || "/"}></Navigate>
   }
   return  (
    <div>
        {children}
    </div>
   )
};

export default PrivateRoute;
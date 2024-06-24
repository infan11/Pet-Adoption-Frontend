import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";
import useAuth from "../../Hooks/Auth/useAuth";
import { Puff } from "react-loader-spinner";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className=" flex min-h-screen justify-center  items-center ">
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
    if (!user && isAdmin) {
        return <Navigate to={"/login"} state={{ from: location }} replace ></Navigate>

    }
    return children
};

export default AdminRoutes;
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";

const UseAdoptPet = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = useAuth();
 const {refetch , data : donateCart = []} = useQuery({
    queryKey: ["donateCart" ,user?.email],
    queryFn : async () => {
        const res = await axiosSecure.get(`/donate?email=${user.email}`) 
        return res.data;
    }
 })

    return  [donateCart, refetch]
};

export default UseAdoptPet; 
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";

const UseAdoptPet = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = useAuth();
 const {refetch , data : adoptPet = []} = useQuery({
    queryKey: ["adoptPet"],
    queryFn : async () => {
        const res = await axiosSecure.get("/adopt")
        return res.data
    }
 })

    return  [adoptPet, refetch]
};

export default UseAdoptPet; 
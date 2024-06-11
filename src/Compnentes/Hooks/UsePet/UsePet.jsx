import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import AxiosPublic from "../AxiosPublic/AxiosPublic";

const UsePet = () => {
    const axiosPublic = AxiosPublic();
    const {user} = useAuth();
    const {refetch ,  data : pet = []} = useQuery({
        queryKey : ["pet"],
        queryFn : async () =>{
            const res = await axiosPublic.get("/addPet");
            return res.data;
        }
    })
     return [pet , refetch]
};

export default UsePet;
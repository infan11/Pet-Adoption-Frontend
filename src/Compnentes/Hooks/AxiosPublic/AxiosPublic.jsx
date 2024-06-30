import axios from "axios";

const axiosPublic =  axios.create({
    baseURL: "https://pet-adoption-backend-zeta.vercel.app"
})
const AxiosPublic = () => {
return axiosPublic;
};

export default AxiosPublic;
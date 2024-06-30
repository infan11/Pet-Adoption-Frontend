import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";


const axiosSecure = axios.create({
    baseURL: "https://pet-adoption-backend-infan11-infan11s-projects.vercel.apphttps://pet-adoption-backend-infan11-infan11s-projects.vercel.app"
})
const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const {logout} = useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token")
        // console.log("request stop by interceptors", token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)
    });


    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async(error) => {
        const status = error.response.status;
        // console.log("Status error in the interceptors" , status);
        if(status === 401 || status === 403){
            await logout();
            navigate("/login")
        }
        return Promise.reject(error)
    });


  
    return axiosSecure;
};


export default UseAxiosSecure;
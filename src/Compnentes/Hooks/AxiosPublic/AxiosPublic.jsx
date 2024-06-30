import axios from "axios";

const axiosPublic =  axios.create({
    baseURL: "https://pet-adoption-backend-infan11-infan11s-projects.vercel.apphttps://pet-adoption-backend-infan11-infan11s-projects.vercel.app"
})
const AxiosPublic = () => {
return axiosPublic;
};

export default AxiosPublic;
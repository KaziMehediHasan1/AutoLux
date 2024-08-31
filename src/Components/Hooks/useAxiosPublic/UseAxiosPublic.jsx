import axios from "axios";

const axiosPublic = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_PORT}`,
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;

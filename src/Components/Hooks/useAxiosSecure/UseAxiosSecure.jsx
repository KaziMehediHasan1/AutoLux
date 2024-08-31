import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_PORT}`,
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);
   
};

export default UseAxiosSecure;

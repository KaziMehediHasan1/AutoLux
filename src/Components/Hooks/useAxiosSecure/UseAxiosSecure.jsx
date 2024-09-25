import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_PORT}`,
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);
  useEffect(() => {
    // request...
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        "access-token", (config.headers.authorization = `Bearer ${token}`);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    // response..
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        console.log("response error interceptor", error.response);
        const status = await error?.response?.status;
        if (status === 401 || status === 403) {
          await logOutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosSecure;
};

export default UseAxiosSecure;

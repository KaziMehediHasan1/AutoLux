import { useContext } from "react";
import { AuthContext } from "../../Components/Authentication/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, currentUser } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (currentUser) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;

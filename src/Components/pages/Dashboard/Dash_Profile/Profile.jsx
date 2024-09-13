import { useContext } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="pt-32 max-w-screen-lg mx-auto font-primary">
      <Helmet>
        <title>AutoLux | Profile</title>
      </Helmet>
      <div className="bg-[#EEF1FB] w-80 mx-auto md:w-[450px] h-80 rounded py-10 space-y-5 space-x-4">
        <div className="text-center">
          <span className="text-xl font-semibold text-gray-800">Name</span>{" "}
          <p className="text-gray-500 text-xl">{currentUser?.displayName}</p>
        </div>
        <div className="text-center">
          <span className="text-xl font-semibold text-gray-800">Email</span>{" "}
          <p className="text-gray-500 text-xl">{currentUser?.email}</p>
        </div>
        <div className="flex justify-center space-x-5">
          <button className="text-white bg-blue-600 px-4 py-1 rounded-lg">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

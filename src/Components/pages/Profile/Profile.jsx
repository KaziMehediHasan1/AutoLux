import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  //   console.log(currenUser);
  return (
    <div className="pt-32 max-w-screen-lg mx-auto font-primary">
      <div className="bg-[#EEF1FB] w-80 mx-auto md:w-[450px] h-80 rounded py-10 space-y-5 space-x-4">
        <div className="text-center">
          <span className="text-xl font-semibold text-gray-800">Name</span>{" "}
          <p className="text-gray-500 text-xl">{currentUser?.displayName}</p>
        </div>
        <div className="text-center">
          <span className="text-xl font-semibold text-gray-800">Email</span>{" "}
          <p className="text-gray-500 text-xl">{currentUser?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

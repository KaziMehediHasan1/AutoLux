import { createContext, useEffect, useState } from "react";
import { auth } from "../../../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import UseAxiosPublic from "../../Hooks/useAxiosPublic/UseAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const axiosPublic = UseAxiosPublic();
  // create user(email, pass)..
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signIn User(email , pass)..
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login..
  const GoogleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  // facebook login
  const FBLogin = () => {
    setLoading(true);
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };
  // update a user's profile.
  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  // logout user..
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // authentication state observer and get user data..
  useEffect(() =>{
    const  unSubscriber =  onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      const loggedInUser = user?.email || currentUser?.email;
      if (user) {
        // Get user's email or token
        const userEmail = user.email;

        // Get JWT token from server using Axios
        axiosPublic
          .post("/jwt", { email: userEmail })
          .then((res) => {
            console.log("token pathanor age -", res.data);
            if (res.data.token) {
             localStorage.setItem("access-token", res.data.token); // Store token in local storage
              setLoading(false);
            }
          })
          .catch((err) => {
            console.error("Error logging in:", err);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }

      console.log(loggedInUser);
    });
    return () => {
      unSubscriber();
    };
  }, []);
  // authInfo
  const authInfo = {
    registerUser,
    loginUser,
    GoogleLogin,
    FBLogin,
    loading,
    currentUser,
    logOutUser,
    updateUser,
  };
  // return context..
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

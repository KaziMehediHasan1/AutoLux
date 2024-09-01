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

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [currentUser, setCurrentUser] = useState(null);
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
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      const loggedInUser = user?.email || currentUser?.email;
      setLoading(false);
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

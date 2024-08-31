import { createContext, useEffect, useState } from "react";
import { auth } from "../../../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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
  // logout user..
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // authentication state observer and get user data..
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
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
    loading,
    currentUser,
    logOutUser,
  };
  // return context..
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

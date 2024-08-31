import { createContext, useEffect, useState } from "react";
import { auth } from "../../../Firebase/Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

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
    loading,
    currentUser,
  };
  // return context..
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

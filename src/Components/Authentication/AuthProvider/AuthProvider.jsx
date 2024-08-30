import { createContext } from "react";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    
  // authInfo
  const authInfo = {};
  // return context..
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

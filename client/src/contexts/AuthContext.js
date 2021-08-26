import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    auth.AuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    //TODO: currentUser isAdmin?
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <AuthContext.Provider value={{ currentUser, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

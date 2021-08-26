import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (!(currentUser === null)) {
        const uid = currentUser.uid;
        const userIsAdmin = await (
          await db.collection("Users").doc(uid).get()
        ).data().role;
        if (userIsAdmin === "admin") {
          setIsAdmin(true);
        }
      }
    });
  }, [currentUser]);
  const values = {
    isAdmin,
    setCurrentUser,
    currentUser,
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

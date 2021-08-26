import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (currentUser) {
        const uid = currentUser.uid;
        const userIsAdmin = await (
          await db.collection("Users").doc(uid).get()
        ).data().role;
        if (userIsAdmin === "admin") {
          setIsAdmin(true);
          console.log("admin girişi");
        }
      }
    });
  }, [currentUser]);
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

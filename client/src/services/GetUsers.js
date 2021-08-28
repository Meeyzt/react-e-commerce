import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("Users")
      .orderBy("role")
      .onSnapshot(
        async (snapshot) => {
          await setUsers(
            snapshot.docs.map((t) => ({
              id: t.id,
              role: t.data().role,
              username: t.data().username,
              profilePhoto: t.data().profilePhoto,
            }))
          );
        },
        (error) => console.log(error),
        (onCompletion) => console.log(onCompletion)
      );
  }, []);
  return { users };
};

export default GetUsers;

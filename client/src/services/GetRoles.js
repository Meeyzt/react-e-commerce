import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const GetRoles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    db.collection("Roles")
      .orderBy("name")
      .onSnapshot(
        async (snapshot) => {
          await setRoles(
            snapshot.docs.map((t) => ({
              key: t.id,
              text: t.data().name,
              value: t.data().name.toLowerCase(),
              image: { avatar: true, src: t.data().photoURL },
            }))
          );
        },
        (error) => console.log(error),
        (onCompletion) => console.log(onCompletion)
      );
  }, []);
  return { roles };
};

export default GetRoles;

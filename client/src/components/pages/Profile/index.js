import React, { useEffect, useState } from "react";
import { Card, Segment } from "semantic-ui-react";
import styles from "./styles.module.css";
import { auth } from "../../../firebase/firebase";
import Extra from "./Extra";

function Index() {
  const [user, setUser] = useState({});

  const photoURL =
    "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png";
  useEffect(() => {
    const getData = async () => {
      const currentUser = auth.currentUser;
      await setUser({
        username: currentUser.displayName,
        photoURL: currentUser.photoURL,
        mail: currentUser.email,
        id: currentUser.uid,
      });
    };
    getData();
  }, []);
  return (
    <Segment id={styles.main} inverted>
      <h1>Profile</h1>
      <div id={styles.content}>
        <Card
          id={styles.card}
          image={user.photoURL === null ? photoURL : user.photoURL}
          header={user.username}
          meta={user.mail}
          extra={<Extra user={user} />}
        />
      </div>
    </Segment>
  );
}

export default Index;

import { Card, Segment } from "semantic-ui-react";
import styles from "./styles.module.css";
import { auth } from "../../../firebase/firebase";
import Extra from "./Extra";

function Index() {
  const user = auth.currentUser;
  console.log(user);
  const photoURL =
    "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png";
  return (
    <Segment id={styles.main} inverted>
      <h1>Profile</h1>
      <div id={styles.content}>
        <Card
          id={styles.card}
          image={user.photoURL === null ? photoURL : user.photoURL}
          header={user.displayName}
          meta={user.email}
          extra={<Extra />}
        />
      </div>
    </Segment>
  );
}

export default Index;

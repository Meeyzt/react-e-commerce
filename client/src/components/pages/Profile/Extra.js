import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input, Label } from "semantic-ui-react";
import { auth, db, storage } from "../../../firebase/firebase";
import styles from "./styles.module.css";

function Extra() {
  let history = useHistory();
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState("");
  const onClickHandler = () => {
    auth.signOut().then(() => history.push("/"));
  };

  const handleChange = async (e) => {
    if (e.target.files[0]) {
      await setImages(e.target.files[0]);
    }
  };
  const handleUpload = (e) => {
    setLoading(true);
    console.log("upload starting...");
    if (images === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
      setLoading(false);
      return null;
    }
    const uploadTask = storage.ref(`/images/${user.uid}`).put(images);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //console.log(snapShot);
      },
      (error) => {
        console.error(error);
      },
      () => {
        const imagename = user.uid;
        storage
          .ref("images")
          .child(imagename)
          .getDownloadURL()
          .then(async (firebaseUrl) => {
            user
              .updateProfile({
                displayName: user.displayName,
                photoURL: firebaseUrl,
              })
              .then(() => {
                db.collection("Users")
                  .doc(user.uid)
                  .update({ profilePhoto: firebaseUrl })
                  .then(() => {
                    console.log("image Upload success");
                    setLoading(false);
                  });
              })
              .catch((err) => console.log("Update Profile: ", err));
          })
          .catch((err) => console.log("ImageURL: ", err));
      }
    );
  };

  return (
    <div id={styles.extra}>
      <Label id={styles.changePhoto}>Select Photo</Label>
      <Input
        accept="image/png, image/jpeg"
        type="file"
        onChange={(e) => handleChange(e)}
      />
      {loading ? (
        <Button disabled id={styles.uploadBtn} onClick={(e) => handleUpload(e)}>
          Uploading...
        </Button>
      ) : (
        <Button id={styles.uploadBtn} onClick={(e) => handleUpload(e)}>
          Change Photo
        </Button>
      )}

      <Button id={styles.profileBtn} onClick={() => onClickHandler()}>
        Sign Out
      </Button>
    </div>
  );
}

export default Extra;

import { useState } from "react";
import { Button, Input, Label } from "semantic-ui-react";
import { auth, storage } from "../../../firebase/firebase";
import styles from "./styles.module.css";

function Extra({ user }) {
  const includeInput = { imgUrl: "" };
  const [images, setImages] = useState("");
  const [imageURL, setImageURL] = useState(includeInput);
  const onClickHandler = () => {
    auth.signOut();
  };

  const handleChange = async (e) => {
    if (e.target.files[0]) {
      await setImages(e.target.files[0]);
    }
  };
  const handleUpload = (e) => {
    console.log("upload starting...");
    if (images === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
      return null;
    }
    const uploadTask = storage.ref(`/images/${user.id}`).put(images);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        const imagename = user.id;
        storage
          .ref("images")
          .child(imagename)
          .getDownloadURL()
          .then(async (firebaseUrl) => {
            await setImageURL((prevObject) => ({
              ...prevObject,
              imgUrl: firebaseUrl,
            }));
          });
        console.log(imageURL);
        auth.currentUser
          .updateProfile({
            displayName: auth.currentUser.displayName,
            photoURL: imageURL.imgUrl,
          })
          .then(() => {
            console.log("image Upload success");
          });
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
      <Button id={styles.uploadBtn} onClick={(e) => handleUpload(e)}>
        Change Photo
      </Button>
      <Button id={styles.profileBtn} onClick={() => onClickHandler()}>
        Sign Out
      </Button>
    </div>
  );
}

export default Extra;

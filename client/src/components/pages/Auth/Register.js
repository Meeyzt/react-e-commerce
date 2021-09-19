import React from "react";
import { Button, Input, Checkbox, Container, Form } from "semantic-ui-react";
import styles from "./styles.module.css";
import { auth, db } from "../../../firebase/firebase";
import {
  Link,
  Redirect,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";

function Register() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password, confirmPassword } = e.target.elements;
    const photoURL =
      "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png";

    if (confirmPassword.value === password.value) {
      auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userRecord) => {
          const user = userRecord.user;
          const addUserRef = db.collection("Users").doc(user.uid);
          addUserRef
            .set({
              role: "user",
              username: user.displayName,
              profilePhoto: photoURL,
            })
            .then(() => {
              email.value = "";
              username.value = "";
              password.value = "";
              confirmPassword.value = "";
              user
                .updateProfile({
                  displayName: username.value,
                  photoURL: photoURL,
                })
                .then(() => {
                  console.log("user registered");
                  history.replace("/profile");
                  return (
                    <Route
                      render={({ location }) => (
                        <Redirect
                          to={{
                            pathname: "/profile",
                            state: { from: location },
                          }}
                        />
                      )}
                    />
                  );
                });
            })
            .catch((error) => console.log(error));
        });
    } else {
      alert("Passwords not match");
    }
  };
  return (
    <Container className={styles.cntr}>
      <Form padding="10px" inverted onSubmit={(e) => handleSubmit(e)}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-username"
            label="Username"
            name="username"
            control={Input}
            placeholder="Username"
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="email"
            label="Email"
            name="email"
            placeholder="info@e-commerce.com"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-pass"
            label="Password"
            type="password"
            name="password"
            control={Input}
            placeholder="Password"
          />
          <Form.Field
            id="form-input-control-confirm-pass"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            control={Input}
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Form.Field
          id="form-input-control-chx"
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <div className={styles.rgstr}>
          Already have a account, <Link to="/login"> Log in</Link>
        </div>
        <br />

        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Register;

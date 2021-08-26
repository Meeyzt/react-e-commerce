import React from "react";
import { Button, Input, Checkbox, Container, Form } from "semantic-ui-react";
import styles from "./styles.module.css";
import { auth } from "../../../firebase/firebase";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, phoneNumber, password, confirmPassword } =
      e.target.elements;
    console.log(e.target.elements.value);
    const emailVerified = process.env.REACT_APP_EMAIL_VERIFIED;
    const photoURL =
      "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png";
    if (confirmPassword.value === password.value) {
      auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          const user = auth.currentUser;
          user
            .updateProfile({
              phoneNumber: phoneNumber,
              emailVerified: true,
              displayName: username.value,
              photoURL: photoURL,
            })
            .then(() => console.log("then \n", user));
          user
            .updatePhoneNumber("55555555555")
            .then((userRecord) => console.log(userRecord))
            .catch((e) => console.log(e));
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
            value="Mmmm"
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="email"
            label="Email"
            name="email"
            placeholder="info@e-commerce.com"
            value="meeyzt@gmail.com"
          />
          {/* <Form.Field
            id="form-input-control-phone"
            label="Phone Number"
            type="tel"
            name="phoneNumber"
            control={Input}
            placeholder="(555) 555-55-55"
            value="12345678901"
          /> */}
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-pass"
            label="Password"
            type="password"
            name="password"
            control={Input}
            placeholder="Password"
            value="123456"
          />
          <Form.Field
            id="form-input-control-confirm-pass"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            control={Input}
            placeholder="Confirm Password"
            value="123456"
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

import React from "react";
import { Button, Input, Checkbox, Container, Form } from "semantic-ui-react";
import styles from "./styles.module.css";
import { auth } from "../../../firebase/firebase";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password, confirmPassword } = e.target.elements;
    if (confirmPassword.value === password.value) {
      auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .catch((e) => {
          if (e.message === "The email address is badly formatted.") {
            alert("emaili değiştir");
          }
        });
      console.log("Register: ", "Success");
    } else {
      alert("Passwords not match");
    }
  };
  return (
    <Container className={styles.cntr}>
      <Form padding="10px" inverted onSubmit={(e) => handleSubmit(e)}>
        <Form.Field
          id="form-input-control-username"
          label="Username"
          name="username"
          control={Input}
          placeholder="UserName"
        />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          type="email"
          label="Email"
          name="email"
          placeholder="info@e-commerce.com"
        />
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

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Register;

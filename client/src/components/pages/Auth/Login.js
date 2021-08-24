import React from "react";
import { Button, Input, Checkbox, Container, Form } from "semantic-ui-react";
import styles from "./styles.module.css";
import { auth } from "../../../firebase/firebase";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      auth
        .signInWithEmailAndPassword(email.value, password.value)
        .catch((e) => console.log("Register error:", e.message));
      console.log("Login Success");
    } catch (error) {
      console.log("Login", error);
    }
  };
  return (
    <Container className={styles.cntr}>
      <Form padding="10px" inverted onSubmit={(e) => handleSubmit(e)}>
        <Form.Field
          id="form-control-email"
          control={Input}
          name="email"
          label="Email"
          placeholder="Email"
        />
        <Form.Field
          id="form-control-pass"
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          control={Input}
        />
        <Form.Field label="Don't forget me" control={Checkbox} />

        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

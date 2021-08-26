import React from "react";
import { Button, Input, Container, Form } from "semantic-ui-react";
import styles from "./styles.module.css";
import { auth } from "../../../firebase/firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function Login() {
  const { setCurrentUser, currentUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userRecord) => {
          setCurrentUser(userRecord.user);
        })
        .catch((e) => console.log("Register error:", e.message));
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
        <div className={styles.rgstr}>
          Hesabın yok mu ?<Link to="register"> Kayıt ol</Link>
        </div>

        <br />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

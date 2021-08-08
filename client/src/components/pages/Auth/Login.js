import React from "react";
import { Button, Input, Checkbox, Container, Form } from "semantic-ui-react";
import styles from "./styles.module.css";
function Login() {
  return (
    <Container className={styles.cntr}>
      <Form padding="10px" inverted>
        <Form.Field
          id="form-control-username"
          label="Username"
          control="Input"
          placeholder="Username"
        />
        <Form.Field
          id="form-control-pass"
          label="Password"
          placeholder="Password"
          control={Input}
        />
        <Form.Field label="Don't forget me" control={Checkbox} />

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Login;

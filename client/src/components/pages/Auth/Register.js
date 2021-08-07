import React from "react";
import { Button, Input, Checkbox, Container, Form } from "semantic-ui-react";
import styles from "./styles.module.css";

function Register() {
  return (
    <Container className={styles.cntr}>
      <Form padding="10px" inverted>
        <Form.Field
          id="form-input-control-username"
          label="Username"
          control={Input}
          placeholder="UserName"
        />
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-pass"
            label="Password"
            control={Input}
            placeholder="Password"
          />
          <Form.Field
            id="form-input-control-confirm-pass"
            label="Confirm Password"
            control={Input}
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          placeholder="info@e-commerce.com"
        />

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

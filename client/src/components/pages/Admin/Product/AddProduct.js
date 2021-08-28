import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Segment,
} from "semantic-ui-react";
import styles from "../styles.module.css";
import Product from "./Product";

function AddProduct() {
  const onChangeHandler = (e) => {};
  return (
    <Container id={styles.addProduct}>
      <Segment inverted id={styles.addProductForm}>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Title"
              onChange={(e) => onChangeHandler(e)}
              placeholder="Title"
            />
            <Input id={styles.priceText} labelPosition="right" type="text">
              <Label basic>₺</Label>
              <Input placeholder="Price" onChange={(e) => onChangeHandler(e)} />
              <Label>.00</Label>
            </Input>
          </Form.Group>
          <Form.Group id={styles.productPhoto}>
            <Form.Input
              label="Product Photo"
              onChange={(e) => onChangeHandler(e)}
              placeholder="Product Photo"
              type="file"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Product Photo"
              placeholder="Product Photo"
              onChange={(e) => onChangeHandler(e)}
              type="file"
            />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
      <Segment inverted>
        <Product />
      </Segment>
    </Container>
  );
}

export default AddProduct;

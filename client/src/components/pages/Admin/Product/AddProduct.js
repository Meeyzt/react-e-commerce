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
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function AddProduct() {
  const fileRef = useRef();
  const date = new Date().toLocaleDateString().replaceAll(".", "/");
  const initialState = {
    title: "",
    price: "",
    date: date,
  };
  const [photo, setPhoto] = useState([{}]);
  const [values, setValues] = useState(initialState);

  const onChangeHandler = (e) => {
    const lowerPlaceholder = e.target.placeholder.toLowerCase();
    const targetValue = e.target.value;
    setValues({ ...values, [lowerPlaceholder]: targetValue });
  };
  const changePhoto = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      setPhoto([...photo, { photo: this.result }]);
    });
    reader.readAsDataURL(file);
  };
  return (
    <>
      <Link to="/admin">
        <Button color="black" icon="angle left" content="Previous Page" />
      </Link>
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
              <Form.Group id={styles.priceGroup}>
                <label>Price</label>
                <Input
                  className={styles.priceText}
                  labelPosition="right"
                  type="text"
                >
                  <Input
                    type="number"
                    placeholder="Price"
                    onChange={(e) => onChangeHandler(e)}
                  />
                  <Label basic>₺</Label>
                </Input>
              </Form.Group>
              {photo > 1 && (
                <Form.Group>
                  {photo.map((item, key) => {
                    <div key={key}>{item}</div>;
                  })}
                </Form.Group>
              )}
            </Form.Group>
            <label id={styles.productPhoto}>
              <span>Add Photo</span>
              <input type="file" ref={fileRef} onChange={changePhoto} />
            </label>
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
        <Segment inverted>
          <Product photo={photo} data={values} />
        </Segment>
      </Container>
    </>
  );
}

export default AddProduct;

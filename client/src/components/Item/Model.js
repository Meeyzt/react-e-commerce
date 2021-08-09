import { Button, Header, Image, Modal } from "semantic-ui-react";
import { useState } from "react";
import "./styles.css";

function Model({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer="blurring"
      trigger={
        <Button fluid color={"black"}>
          Inspect
        </Button>
      }
      Header={"Add to Basket"}
    >
      <Modal.Header>Add to Basket</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={data.image} wrapped />
        <Modal.Description>
          <Header>{data.title}</Header>
          <p>{data.description}</p>
          <p className="Price">{data.price}₺</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Add to Basket"
          labelPosition="right"
          icon="shopping basket"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Model;

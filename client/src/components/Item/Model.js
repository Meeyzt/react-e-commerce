import { Button, Header, Image, Modal } from "semantic-ui-react";

function Model({ open, setOpen }) {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button fluid color={"black"}>
          Inspect
        </Button>
      }
    >
      <Modal.Header>Add to Basket</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="http://lorempixel.com/400/200" wrapped />
        <Modal.Description>
          <Header>Title</Header>
          <p>Description</p>
          <p>Price</p>
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

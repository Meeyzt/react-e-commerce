import React, { useState } from "react";
import { Button, Dropdown, Header, Image, Modal } from "semantic-ui-react";
import styles from "../styles.module.css";
import getRoles from "../../../../services/GetRoles";
import { db } from "../../../../firebase/firebase";
import { useHistory } from "react-router-dom";

function UpdateUserModel({ data }) {
  const [open, setOpen] = useState(false);
  const [roleData, setRoleData] = useState("user");
  const { roles } = getRoles();
  const history = useHistory();

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer="blurring"
      trigger={
        <Button id={styles.updateBtn} fluid color={"black"}>
          Update
        </Button>
      }
      Header={"Update User"}
    >
      <Modal.Header>UpdateUser</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={data.profilePhoto} wrapped />
        <Modal.Description>
          <Header>Username : {data.username}</Header>
          <p>
            Role <br />
            {data.role}
          </p>
          <br />
          <Dropdown
            fluid
            options={roles}
            selection
            placeholder="Select Role"
            onChange={(e, data) => setRoleData(data.value)}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Close"
          labelPosition="right"
          icon="close"
          color="black"
          onClick={() => setOpen(false)}
        />
        <Button
          content="Update"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            db.collection("Users")
              .doc(data.id)
              .update({ role: roleData })
              .then(() => {
                history.push("/admin");
                console.log("Role update success");
              });
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default UpdateUserModel;

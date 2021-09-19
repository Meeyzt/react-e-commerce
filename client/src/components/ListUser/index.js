import React from "react";
import { Button, List, Image } from "semantic-ui-react";
import styles from "./styles.module.css";
import UpdateUserModel from "../pages/Admin/User/UpdateUserModel";
import { auth } from "../../firebase/firebase";

function Index({ data }) {
  return (
    <List.Item key={data.id}>
      <Image avatar src={data.profilePhoto} />
      <List.Content>
        <List.Header>{data.username}</List.Header>
        {data.role}
      </List.Content>
      <List.Content floated="right" className={styles.rightContent}>
        <UpdateUserModel data={data} />
        <Button disabled id={styles.deleteBtn}>
          Delete
        </Button>
      </List.Content>
    </List.Item>
  );
}

export default Index;

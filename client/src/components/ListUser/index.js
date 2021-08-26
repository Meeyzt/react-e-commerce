import React from "react";
import { Button, List, Image } from "semantic-ui-react";
import styles from "./styles.module.css";

function Index({ data }) {
  return (
    <List.Item>
      <Image avatar src={data.profilePhoto} />
      <List.Content>
        <List.Header>{data.username}</List.Header>
        {data.role}
      </List.Content>
      <List.Content floated="right">
        <Button id={styles.updateBtn}>Update</Button>
        <Button id={styles.deleteBtn}>Delete</Button>
      </List.Content>
    </List.Item>
  );
}

export default Index;

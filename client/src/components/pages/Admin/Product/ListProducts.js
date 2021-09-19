import React from "react";
import { useQuery } from "react-query";
import { Redirect } from "react-router-dom";
import { Button, Header, Image, Table } from "semantic-ui-react";
import { fetchProductList } from "../../../../api";
import { useAuth } from "../../../../contexts/AuthContext";
import styles from "../styles.module.css";

function ListProducts() {
  const { isLoading, error, data } = useQuery("Products", fetchProductList);
  const { isAdmin } = useAuth();

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h1>An error has occurred: {error.message} </h1>;
  if (!isAdmin) {
    return <Redirect to="/" />;
  }

  return (
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((item, key) => {
          return (
            <Table.Row key={key}>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://picsum.photos/200/300"
                    rounded
                    size="medium"
                  />
                  <Header.Content id={styles.title}>
                    {item.title}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell textAlign="center">{item.price}₺</Table.Cell>
              <Table.Cell textAlign="right">22/12/2222</Table.Cell>
              <Table.Cell textAlign="center">
                <Button id={styles.dltBtn} color="red">
                  ×
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default ListProducts;

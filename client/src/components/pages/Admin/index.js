import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import styles from "./styles.module.css";

function Index() {
  return (
    <div className={styles.admin}>
      <Link to="/admin/listusers">
        <Button primary>List Users</Button>
      </Link>
      <Link to="/admin/addProduct">
        <Button secondary>Add Product</Button>
      </Link>
      <Link to="/admin/listProduct">
        <Button secondary>List Product</Button>
      </Link>
    </div>
  );
}

export default Index;

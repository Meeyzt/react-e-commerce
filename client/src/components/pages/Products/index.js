import React from "react";
import { Grid, GridRow } from "semantic-ui-react";
import Item from "../../Item";

function Products() {
  return (
    <>
      <h1>Products</h1>
      <Grid doubling relaxed columns={4} padded>
        <GridRow>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </GridRow>
      </Grid>
    </>
  );
}

export default Products;

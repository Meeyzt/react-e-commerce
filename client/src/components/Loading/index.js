import React from "react";
import { Grid, GridRow } from "semantic-ui-react";
import LoadingItem from "./LoadingItem";

function index() {
  return (
    <>
      <h1>Products</h1>
      <Grid doubling relaxed columns={4} padded>
        <GridRow>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </GridRow>
      </Grid>
    </>
  );
}

export default index;

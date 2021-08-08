import React from "react";
import { Grid, GridRow, Placeholder } from "semantic-ui-react";
import { useQuery } from "react-query";
import Item from "../../Item";
import { fetchProductList } from "../../../api";

function Products() {
  const { isLoading, error, data } = useQuery("Products", fetchProductList);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred:" + error.message;
  return (
    <>
      <h1>Products</h1>
      <Grid doubling relaxed columns={4} padded>
        <GridRow>
          {data &&
            data.map((data, key) => {
              return <Item key={key} data={data} />;
            })}
        </GridRow>
      </Grid>
    </>
  );
}

export default Products;

import { Card, Placeholder, Button } from "semantic-ui-react";

function Product({ data }) {
  return (
    <Card
      inverted
      image={
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      }
      header="{data.title}"
      meta={"12/12/2021"}
      description={`data.price + " ₺"`}
      extra={<Button fluid color={"black"} content="Inspect" />}
    />
  );
}

export default Product;

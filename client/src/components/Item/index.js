import { Card, Image, GridColumn } from "semantic-ui-react";
import "./styles.css";

import Model from "./Model";

function Item({ data }) {
  return (
    <GridColumn style={{ marginBottom: "20px" }}>
      <Card
        image={<Image src={data.image} id="ProductsImage"></Image>}
        header={data.title}
        meta={"12/12/2021"}
        description={data.price + " ₺"}
        extra={<Model data={data} />}
      />
    </GridColumn>
  );
}

export default Item;

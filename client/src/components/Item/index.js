import { Card, Image, GridColumn } from "semantic-ui-react";

import Model from "./Model";

function Item() {
  return (
    <GridColumn style={{ marginBottom: "20px" }}>
      <Card fluid>
        <Image src="http://lorempixel.com/400/200" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Title</Card.Header>
          <Card.Meta>
            <span className="date">Release Date</span>
          </Card.Meta>
          <Card.Description>Description</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Model />
        </Card.Content>
      </Card>
    </GridColumn>
  );
}

export default Item;

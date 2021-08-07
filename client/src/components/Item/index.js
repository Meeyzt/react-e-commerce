import { Card, Image, Button, GridColumn } from "semantic-ui-react";
import { useState } from "react";
import Model from "./Model";

function Item() {
  const [open, setOpen] = useState(false);
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
          <Model open={open} setOpen={setOpen} />
        </Card.Content>
      </Card>
    </GridColumn>
  );
}

export default Item;

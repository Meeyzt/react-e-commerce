import { Card, Image, Button, GridColumn } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Item() {
  return (
    <GridColumn style={{ marginBottom: "20px" }}>
      <Link to="#/">
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
            <Button fluid color={"black"}>
              Add to Basket
            </Button>
          </Card.Content>
        </Card>
      </Link>
    </GridColumn>
  );
}

export default Item;

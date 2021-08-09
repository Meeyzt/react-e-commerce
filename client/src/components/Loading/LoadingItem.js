import React from "react";
import { Button, Card, Grid, Placeholder } from "semantic-ui-react";

function LoadingItem() {
  return (
    <Grid.Column>
      <Card>
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>

        <Card.Content>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line length="very short" />
              <Placeholder.Line length="medium" />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length="short" />
            </Placeholder.Paragraph>
          </Placeholder>
        </Card.Content>
        <Card.Content extra>
          <Button disabled fluid color={"black"}>
            Inspect
          </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default LoadingItem;

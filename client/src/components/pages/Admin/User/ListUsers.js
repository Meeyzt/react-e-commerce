import { Segment, List, Button } from "semantic-ui-react";
import ListUser from "../../../ListUser";
import GetUsers from "../../../../services/GetUsers";
import { Link } from "react-router-dom";

function ListUsers() {
  const { users } = GetUsers();
  return (
    <>
      <Segment inverted>
        <Link to="/admin">
          <Button color="grey" icon="angle left" content="Previous Page" />
        </Link>
        <List id="adminList" divided inverted relaxed verticalAlign="middle">
          {users.map((data, i) => {
            return <ListUser data={data} key={i} />;
          })}
        </List>
      </Segment>
    </>
  );
}

export default ListUsers;

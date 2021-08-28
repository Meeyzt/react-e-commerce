import { Segment, List } from "semantic-ui-react";
import ListUser from "../../../ListUser";
import GetUsers from "../../../../services/GetUsers";

function ListUsers() {
  const { users } = GetUsers();
  return (
    <Segment inverted>
      <List id="adminList" divided inverted relaxed verticalAlign="middle">
        {users.map((data, i) => {
          return <ListUser data={data} />;
        })}
      </List>
    </Segment>
  );
}

export default ListUsers;

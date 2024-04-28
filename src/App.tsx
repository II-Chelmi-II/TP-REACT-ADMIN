import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./UserList";
import { UserEdit } from "./UserEdit";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} edit={UserEdit} recordRepresentation={"name"} />
  <Resource name="posts" list={ListGuesser} />
  <Resource name="comments" list={ListGuesser} />
</Admin>;

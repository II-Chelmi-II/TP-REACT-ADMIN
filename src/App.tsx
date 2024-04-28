import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./UserList";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} edit={EditGuesser} recordRepresentation={"name"} />
  <Resource name="posts" list={ListGuesser} />
  <Resource name="comments" list={ListGuesser} />
</Admin>;

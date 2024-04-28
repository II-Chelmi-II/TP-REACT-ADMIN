import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={ListGuesser} recordRepresentation={"name"} />
  <Resource name="posts" list={ListGuesser} />
  <Resource name="comments" list={ListGuesser} />
</Admin>;

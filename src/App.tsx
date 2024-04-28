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
import { PostList } from "./PostList";
import { PostEdit } from "./PostEdit";
import { CommentList } from "./CommentList";
import { CommentEdit } from "./CommentEdit";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} edit={UserEdit} recordRepresentation={"name"} />
  <Resource name="posts" list={PostList} edit={PostEdit}/>
  <Resource name="comments" list={CommentList} edit={CommentEdit} />
</Admin>;

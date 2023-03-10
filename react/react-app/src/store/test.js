import store from "./index";
import { fetchUsers } from "./action/user-action";

store.dispatch(fetchUsers());

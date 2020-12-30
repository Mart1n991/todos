import { combineReducers } from "redux";

//import reducers
import todos from "./todos";
import visibility from "./visibility";

export default combineReducers({ todos, visibility });

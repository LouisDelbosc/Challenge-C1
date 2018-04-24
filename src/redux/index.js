import { combineReducers } from "redux";
import { userReducer } from "./userreducer";
import { calculator } from "./reducer";

export default combineReducers({
  user: userReducer,
  calculator
});

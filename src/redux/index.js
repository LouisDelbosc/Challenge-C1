import { combineReducers } from "redux";
import { userReducer } from "./userreducer";
import { calculator } from "./calculatorreducer";

export default combineReducers({
  user: userReducer,
  calculator
});

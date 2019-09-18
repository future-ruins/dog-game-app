import { combineReducers } from "redux";
import reducer from "./reducer";
import imagesReducer from "./imagesReducer";

export default combineReducers({
  reducer,
  imagesReducer
});

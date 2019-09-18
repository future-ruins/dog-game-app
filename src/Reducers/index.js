import { combineReducers } from "redux";
import dogsList from "./dogsListReducer";
import imagesReducer from "./imagesReducer";

export default combineReducers({
  dogsList,
  imagesReducer
});

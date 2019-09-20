import { combineReducers } from "redux";
import dogsList from "./dogsListReducer";
import imagesReducer from "./imagesReducer";
import gameOneReducer from "./gameOneReducer";
import scoreReducer from "./scoreReducer";

export default combineReducers({
  dogsList,
  imagesReducer,
  gameOneReducer,
  scoreReducer
});

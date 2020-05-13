import { combineReducers } from "redux";
import { successReducer } from "./successReducer";
import { guessedWordReducer } from "./guessedWordReducer";

export default combineReducers({
  successReducer,
  guessedWordReducer,
});

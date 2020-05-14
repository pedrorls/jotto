import { actionTypes } from "./guessedWordsReducer";

export const secretWord = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

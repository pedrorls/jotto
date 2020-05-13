import { letterMatchCounting } from "../../helpers/index";
import { actionTypes as successActionType } from "./successReducer";

export const actionTypes = {
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = letterMatchCounting(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: successActionType.CORRECT_GUESS });
    }
  };
};

export const guessedWords = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};

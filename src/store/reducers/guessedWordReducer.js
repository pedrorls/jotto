export const actionTypes = {
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {};
};

export const guessedWordReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return state;
    default:
      return state;
  }
};

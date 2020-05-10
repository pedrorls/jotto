export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS });

export const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

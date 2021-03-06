export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export const actions = {
  correctGuess: () => ({ type: actionTypes.CORRECT_GUESS }),
};

export const success = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

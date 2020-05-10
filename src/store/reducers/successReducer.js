export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS });

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

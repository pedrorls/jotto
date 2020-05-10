import {
  correctGuess,
  actionTypes,
} from "../../../store/reducers/successReducer";

describe("correctGuess", () => {
  test("returns an action with type", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

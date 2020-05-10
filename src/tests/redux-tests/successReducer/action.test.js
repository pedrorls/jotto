import { actions, actionTypes } from "../../../store/reducers/successReducer";

describe("correctGuess", () => {
  test("returns an action with type", () => {
    const action = actions.correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

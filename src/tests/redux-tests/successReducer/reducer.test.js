import { success, actionTypes } from "../../../store/reducers/successReducer";

describe("successReducer should", () => {
  it("return initial state if no action is passed", () => {
    const state = success(undefined, {});
    expect(state).toBe(false);
  });

  it("return modified state if an action is passed", () => {
    const action = { type: actionTypes.CORRECT_GUESS };
    const state = success(undefined, action);
    expect(state).toBe(true);
  });
});

import {
  successReducer,
  actionTypes,
} from "../../../store/reducers/successReducer";

describe("successReducer should", () => {
  it("return initial state if no action is passed", () => {
    const state = successReducer(undefined, {});
    expect(state).toBe(false);
  });

  it("return modified state if an action is passed", () => {
    const action = { type: actionTypes.CORRECT_GUESS };
    const state = successReducer(undefined, action);
    expect(state).toBe(true);
  });
});

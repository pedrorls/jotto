import { letterMatchCounting } from "./index";

describe("letterCounting returns the correct count", () => {
  const secretWord = "party";
  test("when there are no matching letters", () => {
    const matches = letterMatchCounting("bones", secretWord);
    expect(matches).toBe(0);
  });

  test("when there are matching letter", () => {
    const matches = letterMatchCounting("train", secretWord);
    expect(matches).toBe(3);
  });

  test("when there are duplicated letters", () => {
    const matches = letterMatchCounting("parka", secretWord);
    expect(matches).toBe(3);
  });
});

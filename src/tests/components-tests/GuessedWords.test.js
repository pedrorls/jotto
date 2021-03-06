import React from "react";
import { shallow } from "enzyme";
import { GuessedWords } from "../../components/GuessedWords";
import { findByTestAttr, checkProps } from "../testsUtils";

const setup = (props = {}) => shallow(<GuessedWords {...props} />);

test("does not throw warning with expected props", () => {
  const expectedProps = {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
  };
  checkProps(GuessedWords, expectedProps);
});

describe("if there are no words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "guessWords-component");
    expect(component.length).toBe(1);
  });

  test("renders instruction to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text()).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "guessWords-component");
    expect(component.length).toBe(1);
  });

  test("renders guessed words section", () => {
    const node = findByTestAttr(wrapper, "guessed-words");
    expect(node.length).toBe(1);
  });

  test("renders correct number of guessed words", () => {
    const node = findByTestAttr(wrapper, "guessed-word");
    expect(node.length).toBe(guessedWords.length);
  });
});

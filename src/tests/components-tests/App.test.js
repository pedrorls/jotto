import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../testsUtils";
import App from "../../App";

const setup = (initialState = {}) =>
  shallow(<App store={storeFactory(initialState)} />)
    .dive()
    .dive();

test("renders learn react link", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "main-app");
  expect(app.length).toBe(1);
});

describe("redux properties", () => {
  test("should has access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("should has access to secretWord state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test("should has access to guessedWords state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });

  test("should has access to getGuessedWord action creator", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

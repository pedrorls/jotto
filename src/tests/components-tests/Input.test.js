import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../testsUtils";
import Input, { UnconnectedInput } from "../../components/Input";

const setup = (initialState = {}) =>
  shallow(<Input store={storeFactory(initialState)} />)
    .dive()
    .dive();

describe("Input component", () => {
  describe("when word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test("renders component without errors", () => {
      const component = findByTestAttr(wrapper, "input-component");
      expect(component.length).toBe(1);
    });

    test("renders input box", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(1);
    });

    test("renders submit button", () => {
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(1);
    });
  });

  describe("when word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("render component without errors", () => {
      const component = findByTestAttr(wrapper, "input-component");
      expect(component.length).toBe(1);
    });

    test("does not renders input box", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(0);
    });

    test("does not render submit button", () => {
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("should has success state as props", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("guessWord action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("Unconnected input", () => {
  let fnMock;
  let wrapper;
  const guess = "train";
  beforeEach(() => {
    fnMock = jest.fn();
    const props = {
      guessWord: fnMock,
    };
    wrapper = shallow(<UnconnectedInput {...props} />);

    wrapper.setState({ currentGuess: guess });

    const button = findByTestAttr(wrapper, "submit-button");
    button.simulate("click");
  });
  test("should call guessed word when button is clicked", () => {
    expect(fnMock.mock.calls.length).toBe(1);
  });

  test("should call word method with input value as argument", () => {
    expect(fnMock.mock.calls[0][0]).toBe(guess);
  });
});

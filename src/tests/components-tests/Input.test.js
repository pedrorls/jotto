import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../testsUtils";
import Input from "../../components/Input";

const setup = (initialState = {}) =>
  shallow(<Input store={storeFactory(initialState)} />)
    .dive()
    .dive();

describe("Input component", () => {
  describe("when word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { successReducer: false };
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
      const initialState = { successReducer: true };
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

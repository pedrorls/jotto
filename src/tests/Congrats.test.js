import React from "react";
import { shallow } from "enzyme";
import { Congrats } from "../components/Congrats";
import { findByTestAttr, checkProps } from "./testsUtils";

const setup = (props = {}) => shallow(<Congrats {...props} />);

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "congrats-component");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "congrats-component");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when success is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});

import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Congrats } from "../components/Congrats";
import { findByTestAttr } from "./testsUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

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

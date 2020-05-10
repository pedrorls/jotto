import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../testsUtils";
import App from "../../App";

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  const app = findByTestAttr(wrapper, "main-app");
  expect(app.length).toBe(1);
});

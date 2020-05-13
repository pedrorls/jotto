import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../testsUtils";
import App from "../../App";

test("renders learn react link", () => {
  const wrapper = shallow(<App store={storeFactory({})} />)
    .dive()
    .dive();
  const app = findByTestAttr(wrapper, "main-app");
  expect(app.length).toBe(1);
});

import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../store/reducers";
import { middlewares } from "../store";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

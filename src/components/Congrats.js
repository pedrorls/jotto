import React from "react";
import PropTypes from "prop-types";

export const Congrats = (props) => (
  <div data-test="congrats-component">
    {props.success && (
      <div data-test="congrats-message" className="alert alert-success">
        Congrats! You guessed the word!
      </div>
    )}
  </div>
);

Congrats.defaultProps = {
  success: false,
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

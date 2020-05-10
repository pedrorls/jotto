import React from "react";
import PropTypes from "prop-types";

export const Congrats = (props) => {
  return (
    <div data-test="congrats-component">
      {props.success && (
        <span data-test="congrats-message">
          Congrats! You guessed the word!
        </span>
      )}
    </div>
  );
};

Congrats.defaultProps = {
  success: false,
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

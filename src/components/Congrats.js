import React from "react";

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

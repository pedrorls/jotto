import React from "react";
import PropTypes from "prop-types";

export const GuessedWords = (props) => {
  return (
    <div data-test="guessWords-component">
      {props.guessedWords.length > 0 ? null : (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      )}
    </div>
  );
};

GuessedWords.defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

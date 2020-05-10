import React from "react";
import PropTypes from "prop-types";

export const GuessedWords = (props) => {
  return (
    <div data-test="guessWords-component">
      {props.guessedWords.length > 0 ? (
        <div data-test="guessed-words">
          <h3>Guessed words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
              </tr>
              <tr>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {props.guessedWords.map((word, index) => (
                <tr key={index} data-test="guessed-word">
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
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

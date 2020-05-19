import React from "react";
import { connect } from "react-redux";
import { Congrats } from "./components/Congrats";
import { GuessedWords } from "./components/GuessedWords";

import Input from "./components/Input";
import "./App.css";
import { getSecretWord } from "./store/reducers/guessedWordsReducer";

class App extends React.Component {
  render() {
    const { success, secretWord, guessedWords } = this.props;
    return (
      <div data-test="main-app" className="container">
        <h1>Jotto App</h1>
        {success ? <Congrats success /> : <Input />}
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success,
    secretWord: state.secretWord,
    guessedWords: state.guessedWords,
  };
};

export default connect(mapStateToProps, { getSecretWord })(App);

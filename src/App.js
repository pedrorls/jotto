import React from "react";
import { connect } from "react-redux";
import { Congrats } from "./components/Congrats";
import { GuessedWords } from "./components/GuessedWords";
import Input from "./components/Input";
import "./App.css";

class App extends React.Component {
  render() {
    const { success } = this.props;
    return (
      <div data-test="main-app" className="container">
        <h1>Jotto App</h1>
        {success ? <Congrats success /> : <Input />}
        <GuessedWords />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { success: state.successReducer };
};

export default connect(mapStateToProps)(App);

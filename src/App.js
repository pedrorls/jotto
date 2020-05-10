import React from "react";
import { Congrats } from "./components/Congrats";
import { GuessedWords } from "./components/GuessedWords";
import "./App.css";

const App = () => {
  return (
    <div data-test="main-app" className="container">
      <h1>Jotto App</h1>
      <Congrats success />
      <GuessedWords />
    </div>
  );
};

export default App;

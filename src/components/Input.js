import React from "react";
import { connect } from "react-redux";
import { guessWord } from "../store/reducers/guessedWordsReducer";

export class UnconnectedInput extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGuess: "",
    };
  }
  onButtonClick = () => {
    const { currentGuess } = this.state;
    const { guessWord } = this.props;
    guessWord(currentGuess);
    this.setState({ currentGuess: "" });
  };

  render() {
    const { success } = this.props;
    return (
      <div data-test="input-component">
        {!success && (
          <form className="form-inline">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3"
              type="text"
              value={this.state.currentGuess}
              onChange={(event) =>
                this.setState({ currentGuess: event.target.value })
              }
              placeholder="Enter guess"
            />
            <button
              data-test="submit-button"
              className="btn btn-primary mb-2"
              onClick={() => this.onButtonClick()}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);

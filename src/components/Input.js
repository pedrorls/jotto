import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  render() {
    const { successReducer } = this.props;
    return (
      <div data-test="input-component">
        {!successReducer && (
          <form className="form-inline">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="Enter guess"
            />
            <button
              data-test="submit-button"
              className="btn btn-primary mb-2"
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

const mapStateToProps = ({ successReducer }) => {
  return { successReducer };
};

export default connect(mapStateToProps)(Input);

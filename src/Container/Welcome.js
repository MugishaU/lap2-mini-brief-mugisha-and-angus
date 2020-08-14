import React from "react";
import { connect } from "react-redux";
import { deleteThing } from "../actions/thingActions";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1>Shopping Assistant</h1>
        <h3>Happy to help you shop!</h3>
        <h3>
          Next Item on the list:{" "}
          <span style={{ color: "blue" }}>
            {this.props.allThings[0] || "Basket Empty"}
          </span>
        </h3>
        <button
          onClick={() => {
            this.props.delete(0);
          }}
        >
          Delete
        </button>
      </>
    );
  }
}

const mSTP = (state) => ({ allThings: state.all });

const mDTP = (dispatch) => ({
  delete: (id) => dispatch(deleteThing(id)),
});

export default connect(mSTP, mDTP)(Welcome);

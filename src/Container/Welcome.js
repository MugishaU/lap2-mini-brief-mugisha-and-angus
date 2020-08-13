import React from "react";
import { connect } from "react-redux";

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
      </>
    );
  }
}

const mSTP = (state) => ({ allThings: state.all });
export default connect(mSTP)(Welcome);

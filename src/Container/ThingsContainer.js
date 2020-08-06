import React from "react";
import { connect } from "react-redux";

class ThingsContainer extends React.Component {
  render() {
    return (
      <>
        <h1>Things</h1>
        <ul>
          {this.props.allThings.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

const mSTP = (state) => ({ allThings: state.all });

export default connect(mSTP)(ThingsContainer);

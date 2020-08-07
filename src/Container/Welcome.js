import React from "react";
import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to a Website</h1>
        <h3>This Website is About Things</h3>
        <h3>The lastest thing is: {this.props.allThings[0]}</h3>
      </>
    );
  }
}

const mSTP = (state) => ({ allThings: state.all });
export default connect(mSTP)(Welcome);

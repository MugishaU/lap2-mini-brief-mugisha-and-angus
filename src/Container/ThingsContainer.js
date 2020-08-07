import React from "react";
import { connect } from "react-redux";
import { addThing } from "../actions/thingActions";

class ThingsContainer extends React.Component {
  state = { trackInput: "", Input: "" };

  handleInput = (event) => {
    this.setState({ trackInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ Input: this.state.trackInput });
    this.props.add(this.state.Input);
    console.log(this.state.Input);
  };
  render() {
    return (
      <>
        <h1>Things</h1>

        {this.props.allThings.map((item, idx) => (
          <h3 key={idx}>{item}</h3>
        ))}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            onChange={this.handleInput}
            placeholder={"Add Item"}
          />
          <input type="submit" />
        </form>
        <h3>{this.state.trackInput}</h3>
        <h3>{this.state.Input}</h3>
      </>
    );
  }
}

const mSTP = (state) => ({ allThings: state.all });

const mDTP = (dispatch) => ({
  add: (item) => dispatch(addThing(item)),
});

export default connect(mSTP, mDTP)(ThingsContainer);

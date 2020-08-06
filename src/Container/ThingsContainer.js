import React from "react";
import { connect } from "react-redux";

class ThingsContainer extends React.Component {
  state = { trackInput: "", Input: "" };

  handleInput = (event) => {
    this.setState({ trackInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ Input: this.state.trackInput });
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

export default connect(mSTP)(ThingsContainer);

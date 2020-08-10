import React from "react";
import { connect } from "react-redux";
import { addThing, deleteThing } from "../actions/thingActions";

class ThingsContainer extends React.Component {
  state = { trackInput: "", Input: "" };

  handleInput = (event) => {
    this.setState({ trackInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ Input: this.state.trackInput }, () => {
      this.props.add(this.state.Input);
    });
  };
  render() {
    return (
      <>
        <h1>All Things</h1>

        {this.props.allThings.map((item, idx) => (
          <div key={idx} className="listItem">
            <h3>{item}</h3>
            <button
              onClick={() => {
                this.props.delete(idx);
              }}
            >
              Delete
            </button>
          </div>
        ))}

        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            name="input"
            onChange={this.handleInput}
            placeholder={"Add Item"}
          />
          <input type="submit" />
        </form>
      </>
    );
  }
}

const mSTP = (state) => ({ allThings: state.all });

const mDTP = (dispatch) => ({
  add: (item) => dispatch(addThing(item)),
  delete: (id) => dispatch(deleteThing(id)),
});

export default connect(mSTP, mDTP)(ThingsContainer);

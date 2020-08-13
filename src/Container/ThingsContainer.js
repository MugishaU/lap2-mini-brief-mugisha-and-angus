import React from "react";
import { connect } from "react-redux";
import { addThing, deleteThing, editThing } from "../actions/thingActions";

class ThingsContainer extends React.Component {
  state = { Input: "" };

  handleInput = (event) => {
    this.setState({ Input: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state.Input);
    event.target.reset();
  };
  render() {
    return (
      <>
        <h1>All Things</h1>

        {this.props.allThings.map((item, idx) => (
          <div key={idx} className="listItem">
            <h3>{item}</h3>
            <form>
              <input type="text" value={item}></input>
              <input type="submit" value="submit"></input>
            </form>
            <button>Edit</button>
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
  edit: (id, item) => dispatch(editThing([id, item])),
});

export default connect(mSTP, mDTP)(ThingsContainer);

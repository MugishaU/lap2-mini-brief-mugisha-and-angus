import React from "react";
import { connect } from "react-redux";
import { addThing, deleteThing, editThing } from "../actions/thingActions";

class ThingsContainer extends React.Component {
  state = { Input: "", edit: null };

  handleInput = (event) => {
    this.setState({ Input: event.target.value });
  };

  handleSubmit = (event, type) => {
    event.preventDefault();
    this.props[type](this.state.edit, this.state.Input);
    this.setState({ edit: null });
    event.target.reset();
  };
  render() {
    return (
      <>
        <h1>Shopping List</h1>

        {this.props.allThings.map((item, idx) => (
          <div className="itemDiv" key={idx}>
            <h3>{item}</h3>
            <div className="item">
              {this.state.edit === idx && (
                <form onSubmit={() => this.handleSubmit(event, "edit")}>
                  <input
                    required
                    className="text"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.Input}
                  ></input>
                  <input
                    className="submit"
                    type="submit"
                    value="submit"
                  ></input>
                </form>
              )}

              <button
                className="delete"
                onClick={() => {
                  this.props.delete(idx);
                  this.setState({ edit: null });
                }}
              >
                Delete
              </button>
              <button
                className="edit"
                onClick={() => {
                  this.setState({ Input: item });
                  this.setState({ edit: idx });
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        <form onSubmit={() => this.handleSubmit(event, "add")}>
          <input
            className="text"
            required
            type="text"
            name="input"
            onChange={this.handleInput}
            placeholder={"Add Item"}
          />
          <input className="submit" type="submit" />
        </form>
      </>
    );
  }
}

const mSTP = (state) => ({ allThings: state.all });

const mDTP = (dispatch) => ({
  add: (id, item) => dispatch(addThing(id, item)),
  delete: (id) => dispatch(deleteThing(id)),
  edit: (id, item) => dispatch(editThing(id, item)),
});

export default connect(mSTP, mDTP)(ThingsContainer);

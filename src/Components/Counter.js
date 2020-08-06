import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = (event, unit) => {
    event.stopPropagation();
    this.setState((prevState) => ({ count: (prevState.count += unit) }));
  };
  render() {
    return (
      <>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.handleClick(event, 1)}>Add 1</button>
        <button onClick={() => this.handleClick(event, -1)}>Subtract 1</button>
      </>
    );
  }
}
export default Counter;

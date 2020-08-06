import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: ++prevState.count }));
    console.log(this.state.count);
  };
  render() {
    const g = this.state.count;

    return (
      <>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleClick}>Add 1</button>
        <button onClick={this.handleClick}>Subtract 1</button>
      </>
    );
  }
}
export default Counter;

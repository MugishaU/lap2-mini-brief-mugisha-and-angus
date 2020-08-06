import React from "react";
import Welcome from "./Container/Welcome";
import Counter from "./Container/CounterContainer";
import Things from "./Container/ThingsContainer";
import Error404 from "./Container/Error404";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <button>Back</button>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/counter" component={Counter} />
          <Route path="/things" component={Things} />
          <Route component={Error404} />
        </Switch>
      </>
    );
  }
}
export default App;

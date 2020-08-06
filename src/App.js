import React from "react";
import Welcome from "./Container/Welcome";
import CounterContainer from "./Container/CounterContainer";
import ThingsContainer from "./Container/ThingsContainer";
import Error404 from "./Container/Error404";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <button>Back</button>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/counter" component={CounterContainer} />
          <Route path="/things" component={ThingsContainer} />
          <Route component={Error404} />
        </Switch>
      </>
    );
  }
}
export default App;

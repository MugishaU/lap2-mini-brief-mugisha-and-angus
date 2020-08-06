import React from "react";
import Welcome from "./Container/Welcome";
import CounterContainer from "./Container/CounterContainer";
import ThingsContainer from "./Container/ThingsContainer";
import Error404 from "./Container/Error404";
import { Switch, Route, NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <h1 id="hi">hello</h1>
        <NavLink to="/" activeClassName="current">
          Home{"   "}
        </NavLink>
        <NavLink to="/counter" activeClassName="current">
          Counter{"   "}
        </NavLink>
        <NavLink to="/things" activeClassName="current">
          Things{"    "}
        </NavLink>
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

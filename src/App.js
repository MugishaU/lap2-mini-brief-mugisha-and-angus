import React from "react";
import Welcome from "./Container/Welcome";
import CounterContainer from "./Container/CounterContainer";
import ThingsContainer from "./Container/ThingsContainer";
import Error404 from "./Container/Error404";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import "./styles/styles.css";
class App extends React.Component {
  render() {
    return (
      <>
        <NavLink to="/" activeClassName="current">
          Home{"   "}
        </NavLink>
        <NavLink to="/counter" activeClassName="current">
          Counter{"   "}
        </NavLink>
        <NavLink to="/things" activeClassName="current">
          Things{"    "}
        </NavLink>
        <button onClick={this.props.history.goBack}>Back</button>

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
export default withRouter(App);

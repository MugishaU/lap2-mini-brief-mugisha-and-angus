import React from "react";
import Welcome from "./Container/Welcome";
import ThingsContainer from "./Container/ThingsContainer";
import Error404 from "./Container/Error404";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import "./styles/styles.css";
class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to="/" activeClassName="current">
            Home{"   "}
          </NavLink>
          <NavLink to="/things" activeClassName="current">
            List{"    "}
          </NavLink>
          <button onClick={this.props.history.goBack}>Back</button>
        </nav>

        <div className="mainbody">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/counter" component={CounterContainer} />
            <Route path="/things" component={ThingsContainer} />
            <Route component={Error404} />
          </Switch>
        </div>
      </>
    );
  }
}
export default withRouter(App);

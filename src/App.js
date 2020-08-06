import React from "react";
import Welcome from "./Container/Welcome";
import Error404 from "./Container/Error404";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route component={Error404} />
        </Switch>
      </>
    );
  }
}
export default App;

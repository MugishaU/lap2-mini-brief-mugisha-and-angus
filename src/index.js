import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import thingReducer from "./reducers/thingReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(thingReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

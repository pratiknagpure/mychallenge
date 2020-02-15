import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TransactionReducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import history from "./history";

import * as serviceWorker from "./serviceWorker";

const store = createStore(TransactionReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

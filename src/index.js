import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Provider } from 'react-redux';

//
import search from "./Components/search";
import Error from "./Components/Error";

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/search-results" component={search} />
      <Route exact path="/error" component={Error} />}
    </App>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

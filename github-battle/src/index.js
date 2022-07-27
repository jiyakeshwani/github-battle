import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./components/App";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Repos from "./components/Repos";
import Battle from "./components/Battle";
import Results from "./components/Results";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/battle">
        <Battle />
      </Route>
      <Route path="/battle/results" exact>
        <Results />
      </Route>
    </BrowserRouter>
  </React.StrictMode>
);

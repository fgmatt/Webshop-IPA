// library
import React from "react";

// routing in React
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Startsite from "./startsite";

// routes
import { rHome } from "../routes-name";

// style sheets
import "./App.css";
import "./style.css";

// Main app component
function App() {
  return (
    <Router>
      <Switch>
        <Route path={rHome}>
          <Startsite />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

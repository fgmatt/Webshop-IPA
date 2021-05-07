// library
import React from "react";

// routing in React
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Startsite from "./startsite";
import Departments from "./departments";
import ProductDetails from "./productDetails";
import AddressInformation from "./addressInformation";
import CardInformation from "./cardInformation";

// routes
import {
  rHome,
  rDesktopPcs,
  rLaptops,
  rMonitors,
  rProductDetails,
  rShoppingCart,
  rAddressInformation,
  rCardInformation,
} from "../routes-name";

// style sheets
import "./App.css";
import "./style.css";

// Main app component
function App() {
  return (
    <Router>
      <Switch>
        <Route path={rMonitors + rCardInformation}>
          <CardInformation />
        </Route>
        <Route path={rLaptops + rCardInformation}>
          <CardInformation />
        </Route>
        <Route path={rDesktopPcs + rCardInformation}>
          <CardInformation />
        </Route>
        <Route path={rMonitors + rAddressInformation}>
          <AddressInformation />
        </Route>
        <Route path={rLaptops + rAddressInformation}>
          <AddressInformation />
        </Route>
        <Route path={rDesktopPcs + rAddressInformation}>
          <AddressInformation />
        </Route>
        <Route path={rMonitors + rProductDetails}>
          <ProductDetails />
        </Route>
        <Route path={rLaptops + rProductDetails}>
          <ProductDetails />
        </Route>
        <Route path={rDesktopPcs + rProductDetails}>
          <ProductDetails />
        </Route>
        <Route path={rMonitors}>
          <Departments.Monitors />
        </Route>
        <Route path={rLaptops}>
          <Departments.Laptops />
        </Route>
        <Route path={rDesktopPcs}>
          <Departments.DesktopPCs />
        </Route>
        <Route path={rHome}>
          <Startsite />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

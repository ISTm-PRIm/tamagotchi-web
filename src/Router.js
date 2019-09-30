import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignInPage, SignUpPage } from "./screens/Registration";
import Home from "./screens/Home";
import TamagotchiHouse from "./screens/TamagotchiHouse";
import Error404 from "./screens/Error404";
import Rules from "./screens/Rules";

const RouterConf = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tamagotchiHome" component={Home} />
        <Route exact path="/tamagotchiHome/:id?" component={TamagotchiHouse} />
        <Route path="/sign_in" component={SignInPage} />
        <Route path="/sign_up" component={SignUpPage} />
        <Route path="/rulse" component={Rules} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default RouterConf;

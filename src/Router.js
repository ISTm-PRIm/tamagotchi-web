import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import TamagotchiHouse from "./screens/TamagotchiHouse";
import Error404 from "./screens/Error404";

const RouterConf = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tomogotchiHome" component={Home} />
        <Route exact path="/tomogotchiHome/:id" component={TamagotchiHouse} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default RouterConf;

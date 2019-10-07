import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "./screens/Registration";
import Home from "./screens/Home";
import Error404 from "./screens/Error404";

const RouterConf = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/sign_in" component={SignInPage} />
        <Route path="/sign_up" component={SignInPage} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default RouterConf;

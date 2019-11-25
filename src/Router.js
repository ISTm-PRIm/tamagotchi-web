import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Error404 from "./screens/Error404";
import CreatePet from "./screens/CreatePet";
import About from "./screens/About";
import OAuth2RedirectHandler from "./screens/OAuth2RedirectHandler";

const RouterConf = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/create_pet" component={CreatePet} />
        <Route path="/about" component={About} />
        <Route
          path="/oauth2/redirect"
          component={OAuth2RedirectHandler}
        ></Route>
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default RouterConf;

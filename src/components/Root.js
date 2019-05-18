import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import WorkCountdown from "./WorkCountdown";
import Header from "./Header";
import TimeCounter from "./TimeCounter";
import SignIn from "./SignIn";

const Root = () => {
  return (
    <Router>
      <Header url={window.location.pathname} />
      <Route exact path="/" component={MainScreen} />
      <Route exact path="/countdown" component={WorkCountdown} />
      <Route exact path="/timey" component={TimeCounter} />
      <Route path="/signin" component={SignIn} />
    </Router>
  );
};

export default Root;

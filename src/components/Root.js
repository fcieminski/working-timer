import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import WorkCountdown from "./WorkCountdown";
import Header from "./Header";

const Root = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={MainScreen} />
      <Route exact path="/countdown" component={WorkCountdown} />
    </Router>
  );
};

export default Root;

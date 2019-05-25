import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import WorkCountdown from "./WorkCountdown";
import Header from "./Header";
import TimeCounter from "./TimeCounter";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import fire from "../firebase/firebase";
import Profile from "./Profile";

const Root = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fire.auth.onAuthStateChanged(user =>
      user ? setUser(true) : setUser(false)
    );
  }, []);

  useEffect(() => {
    fire.db.ref("works").on("value", snapshot => {
      setData(snapshot.val());
    });
  }, []);

  return (
    <Router>
      <Header url={window.location.pathname} user={user} />
      <Route exact path="/" component={MainScreen} />
      <Route exact path="/countdown" component={WorkCountdown} />
      <Route exact path="/timey" component={TimeCounter} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/profile"
        render={props => <Profile {...props} fireData={data} />}
      />
    </Router>
  );
};

export default Root;

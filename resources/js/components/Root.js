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
import axios from "axios";

const Root = () => {
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("api/me").then(({ data }) => setUser(data));
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

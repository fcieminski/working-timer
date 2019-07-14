import React, { useState, useEffect } from "react";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import WorkCountdown from "./WorkCountdown";
import Header from "./Header";
import TimeCounter from "./TimeCounter";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import axios from "axios";

const Root = () => {
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        axios.get("api/me").then(({ data }) => setUser(data));
    };

    return (
        <Router>
            <Header
                url={window.location.pathname}
                user={user}
                fetchUser={fetchUser}
            />
            <Route exact path="/" component={MainScreen} />
            <Route exact path="/countdown" component={WorkCountdown} />
            <Route exact path="/timey" component={TimeCounter} />
            {user ? (
                <Redirect to="/" />
            ) : (
                <>
                    <Route
                        path="/signin"
                        render={props => (
                            <SignIn {...props} fetchUser={fetchUser} />
                        )}
                    />
                    <Route path="/signup" component={SignUp} />
                </>
            )}
            {user ? (
                <Route
                    path="/profile"
                    render={props => <Profile {...props} fireData={data} />}
                />
            ) : (
                <Redirect to="/" />
            )}
        </Router>
    );
};

export default Root;

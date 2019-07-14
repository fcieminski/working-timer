import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = props => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        axios
            .get("api/me")
            .then(({ data }) => (data.email ? props.history.push("/") : false));
    }, []);

    const isLogged = () => {
        props.fetchUser();
        props.history.push("/");
    };

    const logIn = event => {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrf_token
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response =>
                response.ok
                    ? isLogged()
                    : response.json().then(({ errors }) => setError(errors))
            )
            .catch(error => console.log(error));

        // axios
        // .post("/login", {
        //     email,
        //     password
        // })
        // .then(response =>
        //     response.ok
        //         ? isLogged()
        //         : response.json().then(({ errors }) => setError(errors))
        // )
        // .catch(error => console.log(error));
    };

    return (
        <>
            <div className="signin__container">
                <form className="container__form" onSubmit={logIn}>
                    <TextField
                        placeholder="e-mail"
                        type="email"
                        label="e-mail"
                        value={email}
                        required
                        onChange={event => setEmail(event.target.value)}
                    />
                    <TextField
                        placeholder="hasło"
                        type="password"
                        label="hasło"
                        value={password}
                        required
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button
                        className="links__link links__link--active links__link--login"
                        type="submit"
                    >
                        Zaloguj się
                    </button>
                    <Link
                        to="/signup"
                        className="links__link links__link--signup"
                    >
                        Nie mam konta
                    </Link>
                    {error && <h2>{error.email[0]}</h2>}
                </form>
            </div>
        </>
    );
};

export default SignIn;

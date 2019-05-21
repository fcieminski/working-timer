import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import fire from "../firebase/firebase";

const SignIn = props => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fire.auth.onAuthStateChanged(user =>
      user ? props.history.push("/") : false
    );
  }, []);

  const logIn = event => {
    event.preventDefault();
    fire.logIn(email, password).catch(({ message }) => setError(message));
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
          <Link to="/signup" className="links__link links__link--signup">
            Nie mam konta
          </Link>
          {error && <h2>{error}</h2>}
        </form>
      </div>
    </>
  );
};

export default SignIn;

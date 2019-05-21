import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import fire from "../firebase/firebase";

const SignUp = props => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const makeAccount = event => {
    event.preventDefault();
    register();
  };

  async function register() {
    try {
      await fire.signIn(email, password, name);
      await fire.addUserDatabase(name);
      await props.history.push("/");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <div className="signin__container">
        <form className="container__form" onSubmit={makeAccount}>
          <TextField
            placeholder="imię"
            type="imię"
            label="imię"
            value={name}
            required
            onChange={event => setName(event.target.value)}
          />
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
            Załóż konto
          </button>
          {error ? <h2>{error}</h2> : ""}
        </form>
      </div>
    </>
  );
};

export default SignUp;

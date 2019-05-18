import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import db from "../firebase/firebase";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const ref = db.ref("works");
  return (
    <>
      <div className="signin__container">
        <form className="container__form">
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
          <button className="links__link links__link--timer" type="submit">
            Zaloguj się
          </button>
          <button className="links__link" type="submit">
            Nie mam konta
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;

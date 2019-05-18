import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="signin__container">
        <form className="container__form">
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
        </form>
      </div>
    </>
  );
};

export default SignIn;

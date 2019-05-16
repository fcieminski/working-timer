import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <form>
        <TextField
          placeholder="imię"
          type="imię"
          label="imię"
          value={name}
          required
          onChange={() => setName(event.target.value)}
        />
        <TextField
          placeholder="e-mail"
          type="email"
          label="e-mail"
          value={email}
          required
          onChange={() => setEmail(event.target.value)}
        />
        <TextField
          placeholder="hasło"
          type="password"
          label="hasło"
          value={password}
          required
          onChange={() => setPassword(event.target.value)}
        />
        <button type="submit">Zarejestruj się</button>
      </form>
    </>
  );
};

export default SignIn;

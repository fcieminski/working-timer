import React from "react";
import TextField from "@material-ui/core/TextField";

const SignIn = () => {
  return (
    <>
      <form>
        <TextField
          placeholder="imię"
          type="imię"
          label="imię"
          value={name}
          required
        />
        <TextField
          placeholder="e-mail"
          type="email"
          label="e-mail"
          value={email}
          required
        />
        <TextField
          placeholder="hasło"
          type="password"
          label="hasło"
          value={password}
          required
        />
        <button type="submit">Zarejestruj się</button>
      </form>
    </>
  );
};

export default SignIn;

import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";

const SignUp = props => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => (user ? props.history.push("/") : false));
  }, [firebase.User]);

  const makeAccount = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const userId = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("works")
          .child(userId)
          .set({
            name: name
          });
        setError(null);
      })
      .catch(({ message }) => setError(message));
  };

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

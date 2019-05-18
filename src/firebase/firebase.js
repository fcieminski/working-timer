import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnmLgtV6D-hz75uXkju7zIAh143kkZNUw",
  authDomain: "work-timer-react.firebaseapp.com",
  databaseURL: "https://work-timer-react.firebaseio.com",
  projectId: "work-timer-react",
  storageBucket: "work-timer-react.appspot.com",
  messagingSenderId: "140614595870",
  appId: "1:140614595870:web:48b5ea90d82b20d6"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();
export const auth = firebase.auth();

export default db;

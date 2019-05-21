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

class Fire {
  constructor() {
    let app = firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = app.database();
  }
  async signIn(email, password, name) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }
  logIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logOut() {
    return this.auth.signOut();
  }
  addUserDatabase(name) {
    if (this.auth.currentUser) {
      return this.db.ref(`works/${this.auth.currentUser.uid}`).set({
        name
      });
    }
  }
}

export default new Fire();

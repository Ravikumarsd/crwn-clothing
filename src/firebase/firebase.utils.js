import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiuqYvRy4ND-lyVy3lkHAmYPpm42hZqIk",
  authDomain: "crwn-db-ef84e.firebaseapp.com",
  databaseURL: "https://crwn-db-ef84e.firebaseio.com",
  projectId: "crwn-db-ef84e",
  storageBucket: "crwn-db-ef84e.appspot.com",
  messagingSenderId: "194971620580",
  appId: "1:194971620580:web:6d5ee4c24ae0397c3c88f1",
  measurementId: "G-VJJER05HN7",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error in creating user", error.meassage);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

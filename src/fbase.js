import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA009ZWLJlW4VJE8EKtRy3QJ-FdYYIwSMM",
  authDomain: "some-26ee7.firebaseapp.com",
  databaseURL: "https://some-26ee7.firebaseio.com",
  projectId: "some-26ee7",
  storageBucket: "some-26ee7.appspot.com",
  messagingSenderId: "881830153002",
  appId: "1:881830153002:web:5a041835cecd79da6fac53",
  measurementId: "G-PLJFTBVXYH"
};
firebase.initializeApp(firebaseConfig);

console.log("init!")

export const firebaseInstance = firebase;
export const fireStore = firebase.firestore();
export const firebaseDB = firebase.database();
export const authService = firebase.auth();

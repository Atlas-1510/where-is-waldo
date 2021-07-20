import firebase from "firebase/app";
import "firebase/firestore"; // database

var firebaseConfig = {
  apiKey: "AIzaSyBQXvgdIcNCks4yxgoIHr-ORq-8JJitenA",
  authDomain: "my-attempt-b7181.firebaseapp.com",
  projectId: "my-attempt-b7181",
  storageBucket: "my-attempt-b7181.appspot.com",
  messagingSenderId: "418299922451",
  appId: "1:418299922451:web:4f70e172144698d5ad57e6",
  measurementId: "G-PXQNPXD193",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };

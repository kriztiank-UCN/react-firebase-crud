import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoYbc9CJgI1DHFGEIinACW7pB0OyAlL4k",
  authDomain: "codetega-react-firebase-crud.firebaseapp.com",
  projectId: "codetega-react-firebase-crud",
  storageBucket: "codetega-react-firebase-crud.appspot.com",
  messagingSenderId: "264622906837",
  appId: "1:264622906837:web:98313b39ab833f3c83715c"
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
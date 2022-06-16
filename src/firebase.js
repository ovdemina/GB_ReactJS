import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkB2tjrJQGBo4xiVXZfU6uUxDRwTCg6z0",
  authDomain: "reactfirstproject-c2650.firebaseapp.com",
  databaseURL: "https://reactfirstproject-c2650-default-rtdb.firebaseio.com",
  projectId: "reactfirstproject-c2650",
  storageBucket: "reactfirstproject-c2650.appspot.com",
  messagingSenderId: "1046582126809",
  appId: "1:1046582126809:web:973f9bd828f5a74dba76c8",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();

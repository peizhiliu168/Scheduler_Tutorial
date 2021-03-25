import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqKpdk-QzBqKpnwUUvPEzwlKkJo_znR38",
    authDomain: "scheduler-571ec.firebaseapp.com",
    databaseURL: "https://scheduler-571ec-default-rtdb.firebaseio.com",
    projectId: "scheduler-571ec",
    storageBucket: "scheduler-571ec.appspot.com",
    messagingSenderId: "756749370539",
    appId: "1:756749370539:web:db452ad2ac07f779a063ee",
    measurementId: "G-3SJC6YEVQ1"
  };

firebase.initializeApp(firebaseConfig);

export {firebase};
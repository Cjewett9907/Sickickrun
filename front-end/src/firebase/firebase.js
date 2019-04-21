import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAjH0h5MxLQrBoiFQ4gJ1QPuGAd5rmyvdY",
  authDomain: "project-fear.firebaseapp.com",
  databaseURL: "https://project-fear.firebaseio.com",
  projectId: "project-fear",
  storageBucket: "project-fear.appspot.com",
  messagingSenderId: "231380190456"
};

firebase.initializeApp(config);

const database = firebase.firestore();

export { firebase, database };

// import firebase, a database which allows us to store data for todo list
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// initialize my firebase with the proper configurations 
// got these values when create a firebase database 
const firebaseConfig = {
    apiKey: "AIzaSyDb-Rw1-mRS2GyMp6eaRW3XKSViVHyJ2rY",
    authDomain: "todo-firebase-ebc61.firebaseapp.com",
    projectId: "todo-firebase-ebc61",
    storageBucket: "todo-firebase-ebc61.appspot.com",
    messagingSenderId: "188787118288",
    appId: "1:188787118288:web:b53d2b6fb2f98e3a030ed5"
  };
  
// initialize our firebase
firebase.initializeApp(firebaseConfig);

// firebase.auth() provides a way to authorize/log-in users 
export const auth = firebase.auth();
// allows users to sign in using their Google/gmail account 
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// tells firebase to store our email 
export const db = firebase.firestore();
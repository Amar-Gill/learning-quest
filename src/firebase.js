import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/performance';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDEETmdf3X5Z8ble8bDFippCQ_f11oYzx0",
    authDomain: "learning-quest.firebaseapp.com",
    databaseURL: "https://learning-quest.firebaseio.com",
    projectId: "learning-quest",
    storageBucket: "learning-quest.appspot.com",
    messagingSenderId: "253565369099",
    appId: "1:253565369099:web:4d02f5ac18e6eeb88c800e",
    measurementId: "G-T5RSBRYPY9"
};

export function initFirebase() {
    firebase.initializeApp(firebaseConfig);	
    return firebase;
  }
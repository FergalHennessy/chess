import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYON33LEqUAS2P2WRgHDphfd2mSePdZUQ",
    authDomain: "chess-738bc.firebaseapp.com",
    databaseURL: "https://chess-738bc-default-rtdb.firebaseio.com",
    projectId: "chess-738bc",
    storageBucket: "chess-738bc.appspot.com",
    messagingSenderId: "842129387777",
    appId: "1:842129387777:web:0061db2f977c15692fab00",
    measurementId: "G-773FKQ7C5S"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase
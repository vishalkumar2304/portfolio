import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBfKG7lwIUzVc9o2y-dmFy0j1fQ_UfAkBI",
    authDomain: "sakshi-sethi.firebaseapp.com",
    databaseURL: "https://sakshi-sethi.firebaseio.com",
    projectId: "sakshi-sethi",
    storageBucket: "sakshi-sethi.appspot.com",
    messagingSenderId: "73430263420",
    appId: "1:73430263420:web:923f28d4d20557df3e8bf9",
    measurementId: "G-B50RNJYDHV"
  };

firebase.initializeApp(firebaseConfig);  

const storage = firebase.storage();

export {storage, firebase as default};
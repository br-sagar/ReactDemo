import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCyTqrJkCEgWzCbpJDQ6NyA6dbWnCRIXRE",
    authDomain: "react-app-f69c3.firebaseapp.com",
    databaseURL: "https://react-app-f69c3.firebaseio.com",
    projectId: "react-app-f69c3",
    storageBucket: "react-app-f69c3.appspot.com",
    messagingSenderId: "942193440623",
    appId: "1:942193440623:web:9f3b6bf2c4af8a72c8da9a",
    measurementId: "G-5C90DF5LHD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase

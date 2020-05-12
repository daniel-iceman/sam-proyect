import firebase from 'firebase/app'
import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBcFcSn6Gb-i8TIptgbVBo-cz319V9Zwig",
    authDomain: "sam-doctor-app.firebaseapp.com",
    databaseURL: "https://sam-doctor-app.firebaseio.com",
    projectId: "sam-doctor-app",
    storageBucket: "sam-doctor-app.appspot.com",
    messagingSenderId: "481177371906",
    appId: "1:481177371906:web:fa366bad7e9b7596982e1b",
    measurementId: "G-06VBV6K4EP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase
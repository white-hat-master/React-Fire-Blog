import firebase from 'firebase';

// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyB88Q65M5Ek_lhjUe7wVcJdqho2EaLDgWc",
   authDomain: "blogsite-dd09e.firebaseapp.com",
   databaseURL: "https://blogsite-dd09e.firebaseio.com",
   projectId: "blogsite-dd09e",
   storageBucket: "blogsite-dd09e.appspot.com",
   messagingSenderId: "204032653449",
   appId: "1:204032653449:web:df8664dae409da87afae58",
   measurementId: "G-09F7HQGRWS"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();




export default firebase;

import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAA7ggDhj9ps2-y3bh4lxrqTEbrO0l7ptY",
    authDomain: "booksanta-d9b30.firebaseapp.com",
    projectId: "booksanta-d9b30",
    storageBucket: "booksanta-d9b30.appspot.com",
    messagingSenderId: "474552430281",
    appId: "1:474552430281:web:26f6e7b9c3d7c824ed2718"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
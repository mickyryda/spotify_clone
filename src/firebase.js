import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAntGS6Be6FWt6JIcQe9qeyxLSjBmiJEQ8",
    authDomain: "spotify-clone-4d841.firebaseapp.com",
    projectId: "spotify-clone-4d841",
    storageBucket: "spotify-clone-4d841.appspot.com",
    messagingSenderId: "1064232074695",
    appId: "1:1064232074695:web:3cfea39da1a58fc3ac2de2",
    measurementId: "G-HE4WFM0J41"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 
  export { auth, provider };
  export default db;
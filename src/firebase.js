// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJRoztAuwo0MKXs071n1aN9nPsJHxC5sQ",
    authDomain: "clone-fe91a.firebaseapp.com",
    projectId: "clone-fe91a",
    storageBucket: "clone-fe91a.appspot.com",
    messagingSenderId: "482698507249",
    appId: "1:482698507249:web:5fbf9b01dc14d9b19a8a50",
    measurementId: "G-C907JCSV6Z"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};
  
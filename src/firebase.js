import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCRURa7OPn-8bcX4EcOZol5BzQ4XKsMQUc",
    authDomain: "twitter-clone-34050.firebaseapp.com",
    projectId: "twitter-clone-34050",
    storageBucket: "twitter-clone-34050.appspot.com",
    messagingSenderId: "689423900199",
    appId: "1:689423900199:web:345c22d4c89baa6c793802",
    measurementId: "G-ZJPNF55930"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db=firebaseapp.fireStre();
  export default db;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = 
    {
        apiKey: "AIzaSyBxsqb1PdCd-UgUGcG3TtJKj1iq0MkC3a0",
        authDomain: "crwn-db-5b5ae.firebaseapp.com",
        projectId: "crwn-db-5b5ae",
        storageBucket: "crwn-db-5b5ae.appspot.com",
        messagingSenderId: "974903943441",
        appId: "1:974903943441:web:140dfb3bf7cf9334016cb0",
        measurementId: "G-JKMKB0RB5D"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
  console.log("auth ", auth); 
  console.log("provider ", provider);
 auth.signInWithPopup(provider).then(e => console.log(e));
};

export default firebase;
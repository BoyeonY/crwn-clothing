import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBxsqb1PdCd-UgUGcG3TtJKj1iq0MkC3a0",
  authDomain: "crwn-db-5b5ae.firebaseapp.com",
  projectId: "crwn-db-5b5ae",
  storageBucket: "crwn-db-5b5ae.appspot.com",
  messagingSenderId: "974903943441",
  appId: "1:974903943441:web:140dfb3bf7cf9334016cb0",
  measurementId: "G-JKMKB0RB5D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // userRef: DocumentReference object
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
 
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
// Add collections in Firebase DB
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  //group all calls together into one big requests(to avaid some calls fail)
  const batch = firestore.batch();

  // similer with Map method but forEach doesn't return a new array 
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  
  });

  return await batch.commit();

}
// get whole snapshot, convert the array to an object
export const convertCollectionsSnapShotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    // pass some string and give us back a string which can be handled by URL (convert any character can't be handled)
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] =collection;
    return accumulator;
  },{})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

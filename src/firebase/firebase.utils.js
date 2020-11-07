import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAL5cPB78Hs6V-o5nm74ymgchtdaXgn1f4",
    authDomain: "crwn-db-80c1e.firebaseapp.com",
    databaseURL: "https://crwn-db-80c1e.firebaseio.com",
    projectId: "crwn-db-80c1e",
    storageBucket: "crwn-db-80c1e.appspot.com",
    messagingSenderId: "531951362324",
    appId: "1:531951362324:web:6a6831a6939b8e983f6201"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

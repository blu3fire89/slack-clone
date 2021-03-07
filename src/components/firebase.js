
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwVam02wgPiloRYPCyoZD1Q1S0It3ztZA",
    authDomain: "slack-clone-56f5a.firebaseapp.com",
    projectId: "slack-clone-56f5a",
    storageBucket: "slack-clone-56f5a.appspot.com",
    messagingSenderId: "1028586305079",
    appId: "1:1028586305079:web:2422df657a629f8818b1b2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
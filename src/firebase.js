import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBgZXXLuR89mQqvUsQPUBefs2IeqexeCLc",
  authDomain: "slack-clone-57afa.firebaseapp.com",
  projectId: "slack-clone-57afa",
  storageBucket: "slack-clone-57afa.appspot.com",
  messagingSenderId: "334440787569",
  appId: "1:334440787569:web:6ddc74eb171a7bfa59b5d0",
  measurementId: "G-DQWX1C8S50",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db
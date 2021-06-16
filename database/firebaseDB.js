import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Please be responsible :(
// I only enabled write permissions on certain collections & this is a test firestore so it will be disabled in a week
// but don't troll us :(
const firebaseConfig = {
  apiKey: "AIzaSyB-kXRqno6Ov6BNW-MvZwJfWrakEdFhVkY",
  authDomain: "code-exp-f609f.firebaseapp.com",
  projectId: "code-exp-f609f",
  storageBucket: "code-exp-f609f.appspot.com",
  messagingSenderId: "724749816540",
  appId: "1:724749816540:web:0b085d53569884f2cc5a19",
};

firebase.initializeApp(firebaseConfig);
export default firebase;

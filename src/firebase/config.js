import firebase from "@firebase/app";
import "@firebase/storage";
import "@firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAtTE-mvvdKFsdWPXSNrQ7Gvf2UJsYEQ0k",
  authDomain: "instafiregram-2cd32.firebaseapp.com",
  projectId: "instafiregram-2cd32",
  storageBucket: "instafiregram-2cd32.appspot.com",
  messagingSenderId: "682670094145",
  appId: "1:682670094145:web:d38838b3463d286c9ed3c0"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, projectStorage, timeStamp };

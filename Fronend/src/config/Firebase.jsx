/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

//import env
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyA05W7ZKAAOo6oCRvB5mVBwux4RcToKj48",
  authDomain: "ipl-ecell.firebaseapp.com",
  projectId: "ipl-ecell",
  storageBucket: "ipl-ecell.appspot.com",
  messagingSenderId: "249292740197",
  appId: "1:249292740197:web:a55c57ba275b01756f588c",
  measurementId: "G-7EJFE31Q89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {db,auth,analytics};

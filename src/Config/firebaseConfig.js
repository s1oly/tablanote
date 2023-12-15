// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcEI39PLseUfw4NzXV_z-LwApW6mtjB7s",
  authDomain: "tablanote-4abf7.firebaseapp.com",
  projectId: "tablanote-4abf7",
  storageBucket: "tablanote-4abf7.appspot.com",
  messagingSenderId: "871736457795",
  appId: "1:871736457795:web:bbafe51d46f100415ab2f6",
  measurementId: "G-JSE502550T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider= new GoogleAuthProvider();
export const db= getFirestore(app);
export const storage = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNboTm2SDxndw5Aok0Nc94_RDUO66987k",
  authDomain: "podcast-app-react-9d978.firebaseapp.com",
  projectId: "podcast-app-react-9d978",
  storageBucket: "podcast-app-react-9d978.appspot.com",
  messagingSenderId: "651425669216",
  appId: "1:651425669216:web:8c58b9eed4d982b0e3a305",
  measurementId: "G-HQ86NHB0K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth,db,storage};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS_Fvh1hzBhB3ySbtSagfNM3cyq8nwhLI",
  authDomain: "heroes-kubide.firebaseapp.com",
  projectId: "heroes-kubide",
  storageBucket: "heroes-kubide.appspot.com",
  messagingSenderId: "977321705658",
  appId: "1:977321705658:web:532dca25e982ed955c0283"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);